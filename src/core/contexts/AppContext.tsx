import { IFetchSkill } from '../../interfaces/interfaces';
import React, { useEffect, useState } from 'react';
import useApi from '../api/axios';

interface IAppContext {
    skills: { id: number; skill: string }[];
}

interface IAppContextProvider {
    children: React.ReactNode;
}

const AppContext = React.createContext<IAppContext>({} as IAppContext);

const AppProvider: React.FC<IAppContextProvider> = ({ children }) => {
    useEffect(() => {
        const { response } = useApi('/skills', {
            timeout: 5000,
        });
        console.log(response);
    });

    const [skills, setSkills] = useState('HTML');

    const value = { skills };
    // return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
    return <></>;
};

const useAppContext = () => {
    const context = React.useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used inside AppProvider');
    }
    return context;
};

export { AppProvider, useAppContext };

// import useApi from '../api/axios';

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
