import React, {Component} from 'react';
import ListOfComments from './ListOfComments'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, toggleComment } from '../actions/postActions';


class ListOfPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      postsPerPage: 10
    };
    this.onShowComment = this.onShowComment.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  onShowComment(e) {
    this.props.toggleComment(e);
  }

  onPageChange(e) {
    this.setState({
    currentPage: Number(e.target.id)});
  } 

  componentWillMount() {
    this.props.fetchPosts();
  }
    
  render() {
    const { currentPage, postsPerPage } = this.state;
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentItems = this.props.posts.items.slice(indexOfFirst, indexOfLast);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.posts.items.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          key={number} id={number} onClick={this.onPageChange}>{number}
        </button>
      );
    });
    const postItems = currentItems.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={() => this.onShowComment(post.id)}>Toggle Comments</button>
        {this.props.posts.toggledItems.indexOf(post.id) > -1 ? ( <ListOfComments postID={post.id}/>) : (<div/>)}
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
        {renderPageNumbers}
      </div>
    );
  }
}

ListOfPosts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  toggleComment: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts,
});
  
export default connect(mapStateToProps, { fetchPosts, toggleComment })(ListOfPosts);