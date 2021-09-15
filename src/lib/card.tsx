import React, { FC } from 'react';
import styled from 'styled-components';

const DropShadowDiv = styled.div`
border-style: solid;
border-radius: 0.5em;
padding: 1em;
margin-top: 1em;
display: flex;
flex-direction: column;
`;

const Card: FC<{Detail: FC}> = ({Detail}) => {
    return (
        <DropShadowDiv>
            <Detail/>
        </DropShadowDiv>
    );
}

export default Card;
