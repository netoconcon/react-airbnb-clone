import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './components/hello';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Hello name="Boris" lastName="Papillard" />
  </React.StrictMode>,
  document.getElementById('root')
);

