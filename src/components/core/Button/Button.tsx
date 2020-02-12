import * as React from 'react';

import * as S from './Button.style';

interface IProps {
    children: React.ReactNode,
    disabled?: boolean,
    className?: string,
    onClick?(): void
};

const Button: React.FC<IProps> = ({ className, disabled, children, onClick }) => (
    <S.Button disabled={disabled} className={className} onClick={onClick}>
        { children }
    </S.Button>
);

export default Button;