import * as React from 'react';

import { Label } from '@components/core/Label';

import * as S from './FormControl.style';

interface IProps {
    className?: string,
    label?: string,
    children: React.ReactNode
}

const FormControl: React.FC<IProps> = ({ className, label, children }) => (
    <S.FormControl className={className}>
        { label && (
            <Label>{ label }</Label>
        )}
        { children }
    </S.FormControl>
);

export default FormControl;