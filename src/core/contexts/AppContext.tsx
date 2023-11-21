// import { employeesList } from '../../pages/EmployeeListing/constants';
// import { IEmployee, IDepartment } from '../../interfaces/interfaces';
// import React, { useState } from 'react';
// import {
//     departments,
//     roles,
//     locations,
//     skills,
// } from '../../pages/EmployeeListing/constants';

// interface IAppContext {
//     employees: IEmployee[];
//     departments: IDepartment[];
// }

// interface IAppProvider {
//     children: React.ReactNode;
// }

// const AppContext = React.createContext<IAppContext | undefined>(undefined);

// const AppProvider: React.FC<IAppProvider> = ({ children }) => {
//     const [employees, setEmployees] = useState<IEmployee[]>(employeesList);

//     const value = { employees: [employees, setEmployees], departments };
//     return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

// const useAppContext = () => {
//     const context = React.useContext(AppContext);
//     if (context === undefined) {
//         throw new Error('useAppContext must be used inside AppProvider');
//     }
//     return context;
// };

// export { AppProvider, useAppContext };

// import useApi from '../api/axios';

// interface IEmployee {
//     id: number;
//     firstName: string;
//     lastName: string;
//     isActive: boolean;
//     dob: String;
//     email: string;
//     phone: string;
//     designation: string;
//     salary: string;
//     dateOfJoining: string;
//     address: string;
//     moreDetails: null;
//     role: {
//         id: string;
//         role: string;
//     };
//     department: {
//         id: string;
//         department: string;
//     };
//     skills: [
//         {
//             id: string;
//             skill: string;
//         }
//     ];
// }

// interface IResponse {
//     message: string;
//     data: {
//         employees: IEmployee[];
//         count: number;
//     };
// }

// const AppContext: React.FC = () => {
//     const { response, loading, error } = useApi<IResponse>(
//         '/employee?limit=10&offset=0&sortBy=firstName&sortDir=asc',
//         {
//             timeout: 5000,
//         }
//     );

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>{error}</div>;
//     }

//     if (response) {
//         return (
//             <div>
//                 {response.data.employees.map((employee) => (
//                     <pre key={employee.id}>
//                         {JSON.stringify(employee, null, 2)}
//                     </pre>
//                 ))}
//             </div>
//         );
//     }

//     return null;
// };

// export default AppContext;
