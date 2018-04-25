import {connect} from 'react-redux';
import CommentsList from 'react-redux';

const mapStateToProps = state => ({
  comments: state.comments;
});

export default connect(mapStateToProps)(CommentsList);
