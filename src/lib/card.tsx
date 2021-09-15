import React, { FC } from 'react';
import styled from 'styled-components';

export type Entry = {
};

const DropShadowDiv = styled.div`
border-style: solid;
border-radius: 0.5em;
padding: 1em;
margin-top: 1em;
display: flex;
flex-direction: column;
`;

const Card: FC<{name: string, flavor: string, detail: string}> = ({name, flavor, detail}) => {
    return (
        <DropShadowDiv>
            <span className='mb-m'>
                <span className='medium'>{ name }&emsp;/&emsp;</span>
                <span className='regular'>{ flavor }</span>
            </span>
            <span className='regular justify'>{ detail }</span>
        </DropShadowDiv>
    );
};

export default Card;
