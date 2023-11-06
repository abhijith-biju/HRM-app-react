import { Button, Input, TableFilters, Flex, Table } from '../../components';
import { employees, tableHeaders } from './constants';

const EmployeesListing: React.FC = () => {
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
                    <Button className="primary icon-btn">
                        <span>Add Employee</span>
                        <span className="material-symbols-rounded">
                            person_add
                        </span>
                    </Button>
                </Flex>
                <Table headers={tableHeaders} data={employees} />
                {/* <Table data={employees} /> */}
            </section>
        </>
    );
};

export default EmployeesListing;
