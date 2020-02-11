import styled from 'styled-components';

export const Inner = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div``;

export const Board = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border: 1px solid rgba(56, 84, 109, .2);
`;

export const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    border-bottom: 1px solid rgba(56, 84, 109, .2);

    &:last-child {
        border-bottom: 0;
    }
`;