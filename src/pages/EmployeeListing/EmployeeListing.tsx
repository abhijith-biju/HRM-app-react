import {
    Button,
    Input,
    TableFilters,
    Flex,
    Table,
    Modal,
} from '../../components';
import { employees, tableHeaders } from './constants';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const EmployeesListing: React.FC = () => {
    const [isModalopen, setisModalOpen] = useState(false);

    return (
        <>
            <section>
                <Flex className="gap-15p">
                    <TableFilters>
                        <Input placeholder="Search by Employee Name" />
                        <Flex>
                            <Input placeholder="Filter By skills" />
                        </Flex>
                        <Button className="outline icon-btn margin-left-auto">
                            <span>Clear Filters</span>
                            <span className="material-symbols-rounded">
                                filter_alt_off
                            </span>
                        </Button>
                    </TableFilters>
                    <Link to="/add-employee">
                        <Button className="primary icon-btn">
                            <span>Add Employee</span>
                            <span className="material-symbols-rounded">
                                person_add
                            </span>
                        </Button>
                    </Link>
                </Flex>
                <Table
                    headers={tableHeaders}
                    data={employees}
                    deleteBtnOnClick={() => setisModalOpen(true)}
                />
            </section>

            <Modal $isOpen={isModalopen}>
                <p className="confirm-dialog-msg">
                    Are you sure you want to permanently delete the employee
                    record?
                </p>
                <div className="flex-container confirm-dialog-actions">
                    <Button className="outline confirm-yes-btn">Yes</Button>
                    <Button
                        className="primary confirm-no-btn"
                        onClick={() => setisModalOpen(false)}
                    >
                        Cancel
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default EmployeesListing;
