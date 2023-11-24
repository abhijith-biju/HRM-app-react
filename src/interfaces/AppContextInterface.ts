import // IApiEmployee,
// IApiLocation,
// IApiRole,
// IApiSkill,
// IApiDepartment,
'./ApiDataInterface';
import { Dispatch, SetStateAction, ReactNode } from 'react';

export interface IAppContextState {
    // employees: IApiEmployee[];
    skills: { id: number; skill: string }[];
    // roles: IApiRole[];
    // departments: IApiDepartment[];
}

export interface IAppContext {
    appState: IAppContextState;
    // setAppState: Dispatch<SetStateAction<IAppContextState>>;
}

export interface IAppContextProvider {
    children: ReactNode;
}
