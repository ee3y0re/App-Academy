import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root"); //aka main dom element
  ReactDOM.render(<Root/>, root);
});