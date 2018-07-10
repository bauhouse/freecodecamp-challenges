import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// change code below this line
ReactDOMServer.renderToString(<App />);

ReactDOM.render(<App />, document.getElementById('root'));
