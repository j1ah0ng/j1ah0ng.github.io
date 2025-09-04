import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Tex2SVG, { MathJaxProvider } from "react-hook-mathjax";


import './App.css';
import AppRoot from './lib/approot';
import { store } from './redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <MathJaxProvider>
        <AppRoot/>
      </MathJaxProvider>
    </Provider>
  );
};

export default App;
