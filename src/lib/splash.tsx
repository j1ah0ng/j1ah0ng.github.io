import React, { FC } from 'react';
import styled from 'styled-components';

const SplashDiv = styled.div`
width: 100vw;
min-height: 100vh;
height: min-content;
max-width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-attachment: fixed;
background-image: linear-gradient(#88c0d0, #d8dee9);
`;

const Avatar = styled.img`
clip-path: circle(5em at center);
width: 10em;
`;

const Splash: FC = () => {
    return (
        <SplashDiv className='center'>
            <div className='mb-xl'>
                <Avatar src='me.jpg' alt='Profile picture'/>
            </div>
            <span className='large'>
                <span className='light'>Hi, I'm </span>
                <span className='regular'>Jiahong!</span>
            </span>
            <span className='large light mt-s'>
                I'm <span className='italic semibold'>not</span> a web developer.
            </span>
            <span className='regular small mt-xl'>
                This webpage is a work in progress. No, the irony is not lost on me.
            </span>
        </SplashDiv>
    );
};

export default Splash;
