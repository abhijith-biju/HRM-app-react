import {
    IApiEmployee,
    // IApiLocation,
    IApiRole,
    IApiSkill,
    IApiDepartment,
} from './ApiDataInterface';
import { Dispatch, SetStateAction, ReactNode } from 'react';

export interface IAppContextState {
    employees: IApiEmployee[];
    skills: IApiSkill[];
    roles: IApiRole[];
    departments: IApiDepartment[];
}

export interface IAppContext {
    appState: IAppContextState;
    setAppState: Dispatch<SetStateAction<IAppContextState>>;
}

export interface IAppContextProvider {
    children: ReactNode;
}
