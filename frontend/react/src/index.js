import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

class Colorful extends React.Component {
  render() {
    return (
      <div>Big Red</div>
    );
  }
};

ReactDOM.render(<Colorful />, document.getElementById('root'));
