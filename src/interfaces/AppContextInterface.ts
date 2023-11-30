import { ReactNode } from 'react';
import { IOption } from '../components/common/CustomSelect/CustomSelect';
import { ISkill } from './common';

export interface IAppContextState {
    skills: IOption[];
    roles: IOption[];
    departments: IOption[];
    employeeNameFilter: string;
    skillsFilter: ISkill[];
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
