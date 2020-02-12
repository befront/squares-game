import styled from 'styled-components';

export const Screen = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: rgba(56, 84, 109, .05);
`;

export const Inner = styled.div`
    min-width: 400px;
    min-height: 400px;
    padding: 15px;
    display: flex;
    flex-flow: column nowrap;
    background-color: #fff;
`;