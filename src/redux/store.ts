import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from './app-slice';
import { networkSlice } from './network-slice';


export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        network: networkSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => store.dispatch;
