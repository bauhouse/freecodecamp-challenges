import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      name: "Stephen"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

ReactDOM.render(<StatefulComponent />, document.getElementById('challenge-node'));
