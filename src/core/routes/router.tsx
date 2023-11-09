import { createBrowserRouter } from 'react-router-dom';

import Layout from '../../layout/Layout';
import EmployeesListing from '../../pages/EmployeeListing/EmployeeListing';
import ViewEmployeeDetails from '../../pages/ViewEmployeeDetails/ViewEmployeeDetails';
import AddEmployeeDetails from '../../pages/AddEmployeeDetails/AddEmployeeDetails';
import EditEmployeeDetails from '../../pages/EditEmployeeDetails/EditEmployeeDetails';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter(
    [
        {
            element: <Layout></Layout>,
            children: [
                {
                    path: '/',
                    element: <EmployeesListing />,
                },
                {
                    path: 'add-employee',
                    element: <AddEmployeeDetails />,
                },
                {
                    path: 'edit-employee/:employeeId',
                    element: <EditEmployeeDetails />,
                },
                {
                    path: 'view-employee/:employeeId',
                    element: <ViewEmployeeDetails />,
                },
            ],
            errorElement: <ErrorPage />,
        },
    ],
    { basename: import.meta.env.DEV ? '/' : '/HRM-app-react/' }
);

export default router;
