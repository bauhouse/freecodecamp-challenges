import React, { Component } from "react";
import ReactDOM from "react-dom";

const JSX = (
  <div>
    <h1>A Complex JSX Element</h1>
    <p>JSX can represent more complex HTML as well.
      To render this, use Codepen or set up a development environment
      with React, webpack, and Babel to transpile JSX.
    </p>
    <ul>
      <li>React</li>
      <li>webpack</li>
      <li>Babel</li>
    </ul>
  </div>
);

ReactDOM.render(JSX, document.getElementById('root'));
