import {connect} from 'react-redux';
import {MessageInput} from './Input';
import {addComment} from './actions';

const mapDispatchToProps = dispatch => ({
  addComment: (id) => dispatch(addComment(id))
});

export default connect(null,mapDispatchToProps)(MessageInput);
