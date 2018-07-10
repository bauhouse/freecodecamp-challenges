import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: 'red', fontSize: 72}}>Big Red</div>
    );
  }
};

ReactDOM.render(<Colorful />, document.getElementById('root'));
