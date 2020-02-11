import styled from 'styled-components';

export const Input = styled.div`    
`;

export const Field = styled.input`
    width: 100%;
    padding: 10px 15px;
    font-family: "RobotoRegular", sans-serif;
    font-size: 0.875rem;
    line-height: 1rem;
    color: #131220;
    border: 1px solid rgba(56, 84, 109, .2);
    background-color: #fff;
    border-radius: 5px;
    outline: none;
    transition: all .3s ease;

    &:focus {
        border-color: #279DF9;
    }
`;