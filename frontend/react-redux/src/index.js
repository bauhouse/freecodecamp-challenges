import * as Redux from 'redux';

// define ADD, addMessage(), messageReducer(), and store here:

const ADD = 'ADD';

const addMessage = (message) => {
  const action = {
    type: ADD,
    message: message
  }
  return action;
}

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return state = [...state].concat(action.message);
    default:
      return state;
  }
}

const store = Redux.createStore(messageReducer);
