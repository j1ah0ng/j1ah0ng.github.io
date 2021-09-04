import { createSlice } from '@reduxjs/toolkit';

interface AppState {
    ranInitFunction: boolean,
};

const initialState: AppState = {
    ranInitFunction: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setRanInitFunction: state => { state.ranInitFunction = true; },
    }
});

export const setRanInitFunction = appSlice.actions.setRanInitFunction;
