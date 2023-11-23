import styled from 'styled-components';

const StyledFlex = styled.div`
    display: flex;

    &.column {
        flex-direction: column;
    }

    &.justify-center {
        justify-content: center;
    }

    &.align-center {
        align-items: center;
    }

    &.justify-bw {
        justify-content: space-between;
    }

    &.gap-15p {
        gap: 15px;
    }
`;

export default StyledFlex;
