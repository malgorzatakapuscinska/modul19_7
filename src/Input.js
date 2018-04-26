import React from 'react';

export class MessageInput extends React.Component{
    state ={
      message: ''
    }

  handleChange = (e) =>{
    /*e.preventDefault();*/
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type={'text'}
          name='message'
          placeholder='Write your comment here'
          value={this.state.message}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default MessageInput;
