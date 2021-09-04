import React, { FC } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import AppRoot from './lib/approot';
import { store } from './redux/store';

const App: FC = () => {
    return (
        <Provider store={store}>
            <AppRoot/>
        </Provider>
    );
};

export default App;
