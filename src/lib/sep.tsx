import React, { FC } from 'react';
import styled from 'styled-components';

export enum Color {
    Aqua = '#8fbcbb',
    Orange = '#d08770',
    Green = '#a3be8c',
    OffWhite = '#d8dee9',
};

export const Sep: FC<{color: Color}> = ({color}) => {
    const Sep = styled.div`
    background-color: ${color};
    height: 1.5rem;
    `;

    return <Sep/>;
};
