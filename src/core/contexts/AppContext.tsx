import { createContext, useContext, useState, useEffect } from 'react';
import useApi from '../api/useApi';
import {
    IAppContext,
    IAppContextState,
    IAppContextProvider,
} from '../../interfaces/AppContextInterface';
import {
    IApiDepartment,
    IApiRole,
    IApiFetchSkill,
} from '../../interfaces/ApiDataInterface';
import { modifySelectOptionsData } from '../../utils/employees';

const initialState: IAppContextState = {
    roles: [],
    skills: [],
    departments: [],
    employeeNameFilter: '',
    skillsFilter: [],
};

const AppContext = createContext<IAppContext>({
    appState: initialState,
    handleAppState: () => {},
});

const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
    const [appState, setAppState] = useState(initialState);

    const handleAppState = (payload: IAppContextState) => setAppState(payload);

    const value = { appState, handleAppState };

    const skillsFetchResponse = useApi<IApiFetchSkill>('GET', '/skills');
    useEffect(() => {
        if (skillsFetchResponse.response) {
            const skillOptions = skillsFetchResponse.response.data;
            setAppState((appState) => ({
                ...appState,
                skills: modifySelectOptionsData(skillOptions, 'skill'),
            }));
        }
    }, [skillsFetchResponse.response]);

    const rolesFetchResponse = useApi<IApiRole>('GET', '/roles');
    useEffect(() => {
        if (rolesFetchResponse.response) {
            const roleOptions = rolesFetchResponse.response;
            setAppState((appState) => ({
                ...appState,
                roles: modifySelectOptionsData(roleOptions, 'role'),
            }));
        }
    }, [rolesFetchResponse.response]);

    const departmentsFetchResponse = useApi<IApiDepartment>(
        'GET',
        '/departments'
    );
    useEffect(() => {
        if (departmentsFetchResponse.response) {
            const departmentOptions = departmentsFetchResponse.response;
            setAppState((appState) => ({
                ...appState,
                departments: modifySelectOptionsData(
                    departmentOptions,
                    'department'
                ),
            }));
        }
    }, [departmentsFetchResponse.response]);

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }
    return context;
};

export { AppContextProvider, useAppContext };
