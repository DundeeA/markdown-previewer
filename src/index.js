import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Editor from './components/Editor/Editor';
import Preview from './components/Preview/Preview';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Editor /> 
    <Preview />
  </React.StrictMode>
);

