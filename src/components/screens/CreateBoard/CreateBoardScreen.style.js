import styled from 'styled-components';

import { Input } from '@components/core/Input';
import { Button } from '@components/core/Button';

export const Inner = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`;

export const SizeInput = styled(Input)`
    margin-top: 20px;
`;

export const ContinueButton = styled(Button)`
    margin-top: 20px;
`;