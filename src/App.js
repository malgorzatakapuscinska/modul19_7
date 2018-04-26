import React, { Component } from 'react';
import CommentsListContainer from './CommentsListContainer';

import MessageInputContainer from './MessageInputContainer';
import './App.css';

const App = () => {
  return (
    <div className={'App'}>
      <CommentsListContainer />
      <MessageInputContainer />
    </div>
  );
}

export default App;
