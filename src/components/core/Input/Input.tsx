import * as React from 'react';

import * as S from './Input.style';

interface IProps {
    className?: string,
    name?: string,
    type?: string,
    value: any,
    onChange(event: React.ChangeEvent<HTMLInputElement>): void
};

const Input: React.FC<IProps> = ({ className, ...props }) => (
    <S.Input className={className}>
        <S.Field {...props} />
    </S.Input>
);

Input.defaultProps = {
    type: 'text'
};

export default Input;