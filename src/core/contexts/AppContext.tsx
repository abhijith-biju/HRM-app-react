import * as React from 'react';
import { useReducer } from 'react';

import {
    employeesList,
    departments,
    locations,
    roles,
    skills,
} from '../../pages/EmployeeListing/constants';

import {
    IEmployee,
    IDepartment,
    ILocation,
    IRole,
    ISkill,
} from '../../interfaces/interfaces';

interface IAction {
    type: string;
    payload: IEmployee | string;
}

interface IState {
    employeesList: IEmployee[];
    departments: IDepartment[];
    roles: IRole[];
    locations: ILocation[];
    skills: ISkill[];
}

interface IDispatch {
    dispatch: () => void;
}

interface IAppContext {
    state: IState;
    dispatch: (action: IAction) => void;
}

interface IAppProvider {
    children: React.ReactNode;
}

const initialValue = {
    employeesList,
    departments,
    locations,
    skills,
    roles,
};

const AppContext = React.createContext<IAppContext | null>(null);

const AppReducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case 'addEmployee': {
            return state;
        }
        default: {
            throw new Error(`Undefined Action type : ${action.type}`);
        }
    }
};

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialValue);
    const value = { state, dispatch };
    console.log(initialValue);
    // return <></>;

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
