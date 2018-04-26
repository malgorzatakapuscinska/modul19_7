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

  handleSubmit = () => {
    this.props.addComment(this.state.message);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={'message'}>Add comment</label>
        <input
          type={'text'}
          name='message'
          value={this.state.message}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default MessageInput;
