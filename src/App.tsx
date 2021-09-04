import React, { FC } from 'react';
import styled from 'styled-components';

import './App.css';

import Splash from './lib/splash';
import Footer from './lib/footer';

import { Sep, Color } from './lib/sep';

const RootDiv = styled.div`
`;

const App: FC = () => {
    return (
        <RootDiv>
            <Splash/>
            <Sep color={Color.Orange}/>
            <Footer/>
        </RootDiv>
    );
};

export default App;
