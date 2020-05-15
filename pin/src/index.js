import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import AppWithContext from './AppWithContext';
import UserContext from './UserContext'

ReactDOM.render(
  <React.StrictMode>
      <AppWithContext />
  </React.StrictMode>,
  document.getElementById("root")
);
