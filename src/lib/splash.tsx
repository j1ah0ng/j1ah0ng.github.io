import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MathComponent } from 'mathjax-react';

const SplashDiv = styled.div`
width: 100vw;
min-height: 100vh;
max-height: -webkit-fill-available;
max-height: -moz-available;
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
clip-path: circle(5rem at center);
width: 10em;
`;

const TIMEOUT = 900;

const Splash: FC = () => {
    /*
    const texts = [
        'asdf',
        'lkjlkj',
        '12093102',
        'sldkjfdslkfjdslkj'
    ];
    const [updateToggle, setUpdateToggle] = useState(false);
    const [flavorText, setFlavorText] = useState('initial value');
    useEffect(() => {
        const timeout = setTimeout(() => {
            setFlavorText(texts[Math.floor(Math.random() * texts.length)]);
            setUpdateToggle(!updateToggle);
        }, TIMEOUT)
        return () => clearTimeout(timeout);
    }, [updateToggle])
    */

    return (
        <SplashDiv className='center'>
            <div className='mb-xl'>
                <Avatar src='me.jpg' alt='Profile picture'/>
            </div>
            <span className='large mr-l ml-l'>
                <span className='light'>Hi, I'm </span>
                <span className='regular'>Jiahong!</span>
            </span>
            <span className='large light mr-l ml-l mt-s'>
                I'm <span className='italic semibold'>not</span> a web developer.
            </span>
            <span className='regular small mr-l ml-l mt-xl'>
                This webpage is a work in progress. No, the irony is not lost on me.
            </span>
        </SplashDiv>
    );
};

export default Splash;
