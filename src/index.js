import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './app';
import "normalize.css"
import {GlobalStyles} from "./global-styles.js"
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
