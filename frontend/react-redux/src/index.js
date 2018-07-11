import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';

// define ADD, addMessage(), messageReducer(), and store here:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage(event) {
    this.setState({
      input: '',
      messages: [...this.state.messages].concat(this.state.input)
    });
  }

  render() {
    const items = this.state.messages.map((value, index) => <li key={'item' + index}>{value}</li>);
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitMessage}>Add Message</button>
        <p>{this.state.input}</p>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

ReactDOM.render(<DisplayMessages />, document.getElementById('root'));
