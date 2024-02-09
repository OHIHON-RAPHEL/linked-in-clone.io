import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import { store } from './app/store';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgclMBJMpeTvK0Bly1UOo2fz9EFWjx8Kk",
  authDomain: "linkedin-clone-d6421.firebaseapp.com",
  databaseURL: "https://linkedin-clone-d6421-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-d6421",
  storageBucket: "linkedin-clone-d6421.appspot.com",
  messagingSenderId: "951932945636",
  appId: "1:951932945636:web:969de914a12531c52498f1"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App database={database}  />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();