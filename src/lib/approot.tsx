import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { store, useAppDispatch, RootState } from '../redux/store';
import { getDateString } from '../redux/network-slice';

import Splash from './splash';
import Footer from './footer';

import { Sep, Color } from './sep';

const init = () => {
    if (!useSelector((state: RootState) => state.app.ranInitFunction)) {
        const dispatch = useAppDispatch();
        dispatch(getDateString());
    }
}

const RootDiv = styled.div`
`;

const App: FC = () => {
    init();
    return (
        <RootDiv>
            <Splash/>
            <Sep color={Color.Aqua}/>
            <Sep color={Color.Orange}/>
            <Footer/>
        </RootDiv>
    );
};

export default App;
