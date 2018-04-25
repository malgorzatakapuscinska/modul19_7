import {connect} form 'react-redux';
import {Comment} from './Comment';
import {thumbUpComment} from './actions';


//returns object containing functions ready to use in components

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id));
});

export default connect(null, mapDispatchToProps)(Comment);
