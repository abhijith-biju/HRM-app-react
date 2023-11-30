import { useAppContext } from '../../core/contexts/AppContext';
import { Input, Button } from '..';
import Select, { MultiValue } from 'react-select';
import {
    CustomSelectStyles,
    StyledEmployeesFilterWrap,
} from './EmployeesTableFilter.style';
import { IReactSelectOption } from '../../interfaces/common';

const EmployeesTableFilter: React.FC = () => {
    const { appState, handleAppState } = useAppContext();

    const handleSearchInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        handleAppState({
            ...appState,
            employeeNameFilter: event.target.value.trim().toLowerCase(),
        });
    };

    return (
        <StyledEmployeesFilterWrap>
            <Input
                placeholder="Search by Employee Name"
                value={appState.employeeNameFilter}
                onChange={handleSearchInputChange}
            />
            <Select
                options={appState.skills}
                value={appState.skillsFilter}
                name="searchSkills"
                isMulti
                closeMenuOnSelect={false}
                styles={CustomSelectStyles}
                placeholder="Filter by skills"
                onChange={(
                    options: MultiValue<
                        IReactSelectOption | MultiValue<IReactSelectOption>
                    >
                ) => {
                    handleAppState({
                        ...appState,
                        skillsFilter: [...options],
                    });
                }}
            />
            <Button
                className="outline icon-btn margin-left-auto"
                onClick={() =>
                    handleAppState({
                        ...appState,
                        employeeNameFilter: '',
                        skillsFilter: [],
                    })
                }
            >
                <span>Clear Filters</span>
                <span className="material-symbols-rounded">filter_alt_off</span>
            </Button>
        </StyledEmployeesFilterWrap>
    );
};

export default EmployeesTableFilter;
