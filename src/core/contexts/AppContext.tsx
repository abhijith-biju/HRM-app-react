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
    // roles: [],
    skills: [],
    // departments: [],
};

const AppContext = createContext<IAppContextState>({
    skills: [],
});

const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
    const [appState, setAppState] = useState(initialState);
    const contextValue = appState;

    const { response } = useApi<IApiSkill>('/skills');
    console.log(contextValue.skills);
    useEffect(() => {
        if (response !== null) {
            // console.log('Obtained data');
            setAppState({ ...appState, skills: response.data });
            // console.log('set new data');
        }
    }, [response]);
    // debugger;
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }
    return context;
};

export { AppContextProvider, useAppContext };
