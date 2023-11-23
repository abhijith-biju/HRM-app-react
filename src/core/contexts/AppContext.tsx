import { createContext, useContext, useState } from 'react';
import {
    IAppContext,
    IAppContextState,
    IAppContextProvider,
} from '../../interfaces/AppContextInterface';

const initialState: IAppContextState = {
    employees: [],
    roles: [],
    skills: [],
    departments: [],
};

const AppContext = createContext<IAppContext>({
    appState: initialState,
    setAppState: () => {},
});

const AppContextProvider: React.FC<IAppContextProvider> = ({ children }) => {
    const [appState, setAppState] = useState(initialState);
    const value = { appState, setAppState };

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
