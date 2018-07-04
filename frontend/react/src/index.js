import React, { Component } from "react";
import ReactDOM from "react-dom";

const Citrus = () => {
  return (
    <div>
      <h2>Citrus:</h2>
      <ul>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Orange</li>
        <li>Grapefruit</li>
      </ul>
    </div>
  );
};

const NonCitrus = () => {
  return (
    <div>
      <h2>Non-Citrus:</h2>
      <ul>
        <li>Apple</li>
        <li>Blueberry</li>
        <li>Strawberry</li>
        <li>Banana</li>
      </ul>
    </div>
  );
};

const Vegetables = () => {
  return (
    <div>
      <h2>Vegetables:</h2>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
      </ul>
    </div>
  );
};

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <Citrus />
        <NonCitrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
     super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('root'));
