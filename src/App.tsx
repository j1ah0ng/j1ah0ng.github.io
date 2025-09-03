import React, { FC } from 'react';
import { Provider } from 'react-redux';
import MathJaxContext from 'better-react-mathjax';

import './App.css';
import AppRoot from './lib/approot';
import { store } from './redux/store';

const App: FC = () => {
    return (
      <MathJaxContext>
        <Provider store={store}>
            <AppRoot/>
        </Provider>
      </MathJaxContext>
    );
};

export default App;
