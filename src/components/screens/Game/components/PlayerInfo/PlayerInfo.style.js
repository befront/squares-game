import styled from 'styled-components';

export const PlayerInfo = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-bottom: 10px;
`;

export const Content = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

export const Name = styled.p`
    font-family: "RobotoBold", sans-serif;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 600;
    color: #131220;
`;

export const Points = styled.p`
    margin-left: 5px;
    font-family: "RobotoBold", sans-serif;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 600;
    color: #131220;
`;

export const Mark = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin-left: 10px;
`;