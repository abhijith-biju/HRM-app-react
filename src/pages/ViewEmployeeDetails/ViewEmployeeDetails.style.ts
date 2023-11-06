import styled from 'styled-components';
import { Flex } from '../../components';

const StyledEmpDetailsWrap = styled(Flex)`
    padding: 0;
    width: max-content;
    margin-inline: auto;
    border: 1px solid var(--primary-clr);
    border-radius: 5px;
    box-shadow: 0 6px 20px -5px rgba(0, 0, 0);

    & .main-details {
        background-color: var(--primary-clr);
        color: #fff;
        width: 350px;
        padding: 30px 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    & .extended-details {
        padding: 30px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 450px;
    }

    & .profile-photo {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        border: 5px solid #fff;
        margin-inline: auto;
        margin-bottom: 30px;
        object-fit: cover;
    }

    & .full-name {
        font-size: 2em;
        font-weight: 500;
        margin: 0 0 10px 0;
    }

    & .role,
    & .department,
    & .location {
        font-size: 1.2em;
        margin: 0 0 4px 0;
    }

    & dl {
        margin: 0;
    }

    & .data-entry {
        margin-bottom: 17px;
    }

    & dt,
    & dd {
        display: block;
        margin: 0;
    }

    & dt {
        font-size: 1em;
        font-weight: 500;
    }

    & dd {
        font-size: 1.2em;
        font-weight: 300;
        color: rgb(43, 42, 42);
        word-wrap: break-word;
    }

    & .selected-skills-list {
        margin: 5px 0 0 0;
        list-style: none;
        padding: 0;
        gap: 8px;
        flex-wrap: wrap;
    }
`;

export default StyledEmpDetailsWrap;
