import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const ModalDiv = styled.div`
width: 100vw;
min-height: 100vh;
height: min-content;
max-width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-attachment: fixed;
background-color: #434c5e;
`;

const spinKeyframes = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

const SpinningDiv = styled.div`
animation: ${spinKeyframes} infinite 0.75s linear;
`;

export const LoadingModal: FC = () => {
    return (
        <ModalDiv>
            <SpinningDiv>
                <FontAwesomeIcon icon={faSpinner} size='3x' className='spinner'/>
            </SpinningDiv>
        </ModalDiv>
    );
};
