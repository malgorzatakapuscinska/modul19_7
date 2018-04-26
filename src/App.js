import React, { Component } from 'react';
import CommentsListContainer from './CommentsListContainer';

import MessageInputContainer from './MessageInputContainer';
import './App.css';

const App = () => {
  return (
    <div className={'App'}>
      <h1>Welcame to Comments Show App</h1>
      <p> To add comment write text in form below and press ENTER. </p>
      <MessageInputContainer />
      <CommentsListContainer />
    </div>
  );
}

export default App;
