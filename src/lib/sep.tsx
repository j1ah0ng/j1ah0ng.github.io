import React, { FC } from 'react';
import styled from 'styled-components';

export enum Color {
    Aqua = '#8fbcbb',
    Orange = '#d08770',
};

export const Sep: FC<{color: Color}> = ({color}) => {
    const Sep = styled.div`
    background-color: ${color};
    height: 1.5rem;
    `;

    return <Sep/>;
};
