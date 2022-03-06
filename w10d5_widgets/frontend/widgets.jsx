//this is like our index.js file
//import everything here, the react, reactdom, and root which also has the clases
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

document.addEventListener("DOMContentLoaded", () => {
  //get the main dom element through the id of the html tag
  const root = document.getElementById("root");
  //this statement renders the element that will represent the dom
  //ReactDOM.render(<FileContainingClasses/, >)
  ReactDOM.render(<Root/>, root);
});