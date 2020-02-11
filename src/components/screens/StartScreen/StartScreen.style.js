import styled from 'styled-components';

import { Button } from '@components/core/Button';

export const Inner = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center
`;

export const StartButton = styled(Button)`
    font-size: 1.125rem;
    line-height: 2rem;
    padding: 20px 0;
`;