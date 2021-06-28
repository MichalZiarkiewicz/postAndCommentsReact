import { FETCH_POSTS, TOGGLE_COMMENT } from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const toggleComment = commentID => dispatch => {
    dispatch({
      type: TOGGLE_COMMENT,
      payload: commentID
    })
}