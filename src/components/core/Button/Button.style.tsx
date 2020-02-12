import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    min-width: 135px;
    padding: 10px 16px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    font-family: "RobotoMedium", sans-serif;
    font-weight: 600;
    font-size: .75rem;
    line-height: .875rem;
    text-transform: uppercase;
    background-color: ${props => props.disabled ? 'rgba(111, 207, 151, 0.5)': '#6FCF97' };
    color: #fff;
    border-radius: 2px;
    border: 0;
    outline: none;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        background-color: ${props => props.disabled ? 'rgba(111, 207, 151, 0.5)' : '#7FD8A4'};
    }
`;