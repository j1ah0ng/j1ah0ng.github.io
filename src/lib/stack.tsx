import React, { FC } from 'react';
import styled from 'styled-components';

import Card from './card';

const StackDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media screen only and (min-width: 1200px) {
    width: 60vw;
    max-width: 720px;
}
`;

const SectionDiv = styled.div`
margin-top: 5vh;
width: 60vw;
max-width: 720px;
min-width: 300px;
`;

const SpacingDiv = styled.div`
margin-bottom: 5vh;
`;

const Stack: FC = () => {
    return (<StackDiv>
        <SectionDiv>
            <span className='big'>
                Education
            </span>
            <Card
                name='University of California, San Diego'
                flavor='B.Sc. Computer Engineering & B.Sc. Applied Mathematics'
                detail='Differential equations, numerical linear algebra, complex analysis. Algorithms, 
                operating systems, networked systems.'
            />
            <Card
                name='University of California, Berkeley'
                flavor='Data Science, Mathematics'
                detail='Data science (DS 100), real analysis (MATH 104).'
            />
        </SectionDiv>
        <SectionDiv>
            <span className='big'>
                Experience
            </span>
            <Card
                name='Amazon'
                flavor='Alexa Smart Properties'
                detail='Full-stack implementation of a enterprise-facing subscriptions management portal,
                interfacing with existing internal AWS services to synthesise new REST endpoints serving a new
                React-based frontend console. '
            />
        </SectionDiv>
        <SpacingDiv/>
    </StackDiv>);
};

export default Stack;
