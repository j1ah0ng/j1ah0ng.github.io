import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

import { getLastUpdateDate } from '../util/data-provider';

interface NetworkState {
    dateString: string,
    gotDateString: boolean,
}

const initialState: NetworkState = {
    dateString: 'an unknown date',
    gotDateString: false,
}

export const getDateString = createAsyncThunk(
    'network/getDateString',
    getLastUpdateDate
);

export const networkSlice = createSlice({
    name: 'network',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(getDateString.fulfilled, (state, action) => {
            state.dateString = action.payload;
            state.gotDateString = true;
        });
        builder.addCase(getDateString.rejected, (state, action) => {
            state.gotDateString = true;
        });
        builder.addCase(getDateString.pending, (state, action) => {
            state.gotDateString = false;
        });
    },
});
