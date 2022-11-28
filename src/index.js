import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const el = document.getElementById('./Components/Chat/Chat');
// id of the chat container ---------- ^^^
if (el) {
  el.scrollTop = el.scrollHeight;
}