import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// message is a prop which can not be controlled by component

ReactDOM.render(<App message="My friend" element1 />, document.getElementById('root'));
registerServiceWorker();
