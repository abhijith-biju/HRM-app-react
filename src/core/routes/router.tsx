import { createBrowserRouter } from 'react-router-dom';

import EmployeesListing from '../../pages/EmployeeListing/EmployeeListing';
import ViewEmployeeDetails from '../../pages/ViewEmployeeDetails/ViewEmployeeDetails';
import AddEmployeeDetails from '../../pages/AddEmployeeDetails/AddEmployeeDetails';
import EditEmployeeDetails from '../../pages/EditEmployeeDetails/EditEmployeeDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <EmployeesListing />,
    },
    {
        path: '/view-employee',
        element: <ViewEmployeeDetails />,
    },
    {
        path: '/add-employee',
        element: <AddEmployeeDetails />,
    },
    {
        path: '/edit-employee',
        element: <EditEmployeeDetails />,
    },
]);

export default router;
