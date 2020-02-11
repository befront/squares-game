import styled from 'styled-components';

export const Cell = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    background-color: ${props => props.color};
    border-right: 1px solid rgba(56, 84, 109, .2);
    cursor: pointer;
    
    &:before {
        content: "";
        position: absolute;
        width: 44px;
        height: 44px;
        top: 3px;
        left: 3px;
        opacity: 0;
        background-color: rgba(39, 157, 249, .2);
        transition: all .5s ease;
    }

    &:hover {
        &:before {
            opacity: 1;
        }
    }

    &:last-child {
        border-right: 0;
    }
`;