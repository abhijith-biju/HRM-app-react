import { ReactNode } from 'react';
import { MultiValue } from 'react-select';
import { IOption } from '../components/common/CustomSelect/CustomSelect';

export interface IAppContextState {
    skills: IOption[];
    roles: IOption[];
    departments: IOption[];
    employeeNameFilter: string;
    skillsFilter: MultiValue<IOption | MultiValue<IOption>>;
}

export interface IAppContext {
    appState: IAppContextState;
    handleAppState: (payload: IAppContextState) => void;
}

export interface IAppContextProvider {
    children: ReactNode;
}

export interface ISetAppState {
    setAppState: React.Dispatch<React.SetStateAction<IAppContextState>>;
}
