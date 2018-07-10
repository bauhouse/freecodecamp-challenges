import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // change code below this line
    {console.log('Component will mount')}
    // change code above this line
  }
  render() {
    return <div />
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('root'));
