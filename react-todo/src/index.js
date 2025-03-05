// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
