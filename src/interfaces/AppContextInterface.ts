import { ReactNode } from 'react';
import { IOption } from '../components/common/CustomSelect/CustomSelect';

export interface IAppContextState {
    skills: IOption[];
    roles: IOption[];
    departments: IOption[];
}

export interface IAppContext {
    appState: IAppContextState;
}

export interface IAppContextProvider {
    children: ReactNode;
}

export interface IAppSetState {
    setAppState: React.Dispatch<React.SetStateAction<IAppContextState>>;
}
