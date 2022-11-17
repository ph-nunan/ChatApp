import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDom from 'react-dom';
import App from './App';
//ReactDom.reder(<App />, document.getElementById('root'));

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />);