import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { MathJaxProvider } from 'mathjax3-react';

import { MathJax, MathJaxContext } from 'better-react-mathjax';


import './App.css';
import AppRoot from './lib/approot';
import { store } from './redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <MathJaxContext renderMode="post">
      <MathJaxProvider
        options={{
          tex: {
            inlineMath: [
              ['$', '$'],
              ['\\(', '\\)'],
            ],
          },
        }}
      >
        <AppRoot/>
      </MathJaxProvider>
      </MathJaxContext>
    </Provider>
  );
};

export default App;
