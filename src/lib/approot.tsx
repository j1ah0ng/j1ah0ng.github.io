import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '../redux/store';
import { getDateString } from '../redux/network-slice';
import { setRanInitFunction } from '../redux/app-slice';

import Footer from './footer';
import Highlights from './highlights';
import Splash from './splash';
import Resume from './resume';

import { LoadingModal } from './modals';
import { Sep, Color } from './sep';

const init = (ranInitFunction: boolean) => {
    if (!ranInitFunction) {
        const dispatch = useAppDispatch();
        dispatch(getDateString());
        dispatch(setRanInitFunction());
    }
}

const RootDiv = styled.div`
`;

const App: FC = () => {
    const ranInitFunction = useSelector((state: RootState) => state.app.ranInitFunction);
    const gotDateString = useSelector((state: RootState) => state.network.gotDateString);
    init(ranInitFunction);

    return (gotDateString) 
        ? (
            <RootDiv>
                <Splash/>
                <Sep color={Color.Aqua}/>
                <Highlights/>
                <Sep color={Color.Green}/>
                <Resume/>
                <Sep color={Color.Orange}/>
                <Footer/>
            </RootDiv>
        ) : <LoadingModal/>;
};

export default App;
