import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyComponent = function() {
  return (
    <div>MyComponent is a stateless functional component.</div>
  );
}

ReactDOM.render(MyComponent(), document.getElementById('root'));
