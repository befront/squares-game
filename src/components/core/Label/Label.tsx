import * as React from 'react';

import * as S from './Label.style';

interface IProps {
    className?: string,
    children: string
}

const Label: React.FC<IProps> = ({ className, children }) => (
    <S.Label className={className}>{ children }</S.Label>
);

export default Label;