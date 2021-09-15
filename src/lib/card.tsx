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

/**
 * Represents a single card, ie. boxed experience collection, on the main page.
 * @param name
 * @param flavor
 * @param logistics
 * @param Detail (this is expected to have zero margins and zero padding on its boundary)
 * @constructor
 */
const Card: FC<{name: string, flavor: string, logistics: string, Detail: FC}> = ({name, flavor, logistics, Detail}) => {
    return (
        <DropShadowDiv>
            <span>
                <span className='medium'>{ name }&emsp;/&emsp;</span>
                <span className='regular'>{ flavor }</span>
            </span>
            <span className='mb-m xsmall light'>{ logistics }</span>
            <span className='regular'><Detail/></span>
        </DropShadowDiv>
    );
};

export const EmptyCard: FC<{Detail: FC}> = ({Detail}) => {
    return (
        <DropShadowDiv>
            <Detail/>
        </DropShadowDiv>
    );
}

export default Card;
