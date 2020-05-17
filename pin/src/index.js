import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import AppWithContext from './AppWithContext';
import UserContext from './UserContext'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWithContext />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
