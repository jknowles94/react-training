import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

//Example of using props in container component
ReactDOM.render(<App title="Relevant people"/>, document.getElementById('root'));
registerServiceWorker();
