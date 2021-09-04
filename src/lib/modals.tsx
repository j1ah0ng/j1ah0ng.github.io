import React, { FC } from 'react';
import styled from 'styled-components';

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
background-image: linear-gradient(#434c5e, #d8dee9);
`;

export const LoadingModal: FC = () => {
    return (
        <ModalDiv/>
    );
};
