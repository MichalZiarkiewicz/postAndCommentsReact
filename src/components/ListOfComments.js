import React, {Component} from 'react';
import PostComments from './CommentForm'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComments, removeComment } from '../actions/commentActions';
class ListOfComments extends Component {
  constructor(props) {
    super(props);
    this.onRemoveComment = this.onRemoveComment.bind(this);
  }
    
  componentWillMount() {
    this.props.fetchComments(this.props.postID);
  }

  onRemoveComment(e) {
    this.props.removeComment(e);
  }

  render()   {
    const commentItems = this.props.comments.map(comment => (
    <div key={comment.id}>
      <h3>{comment.name}</h3>
      <h6>{comment.email}</h6>
      <p>{comment.body}</p>
      <button onClick={() => this.onRemoveComment(comment.id)}>Remove</button>
      </div>
    ));
    return(
      <div>
        {commentItems}
        <PostComments postID={this.props.postID}/>
      </div>)
  }
}

ListOfComments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired
  };

  const mapStateToProps = state => ({
    comments: state.comments.items,
  });
  
export default connect(mapStateToProps, { fetchComments, removeComment })(ListOfComments);