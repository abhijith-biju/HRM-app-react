import { createContext, useContext, useState, useEffect } from 'react';
import {
    IAppContext,
    IAppContextState,
    IAppContextProvider,
} from '../../interfaces/AppContextInterface';
import useApi from '../api/useApi';
import { IApiSkill } from '../../interfaces/ApiDataInterface';

const initialState: IAppContextState = {
    // employees: [],
    roles: [],
    skills: [],
    departments: [],
};

const AppContext = createContext<IAppContext>({
    appState: initialState,
    // setAppState: () => {},
});

const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
    const [appState, setAppState] = useState(initialState);
    const value = { appState, setAppState };

    const { response } = useApi<IApiSkill>('/skills');
    // console.log(response?.data);
    if (response) {
        setAppState({ ...appState, skills: response.data });
    }

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
