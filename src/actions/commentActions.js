import { FETCH_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from './types';

export const fetchComments = postID => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postID)
    .then(res => res.json())
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments
      })
    );
};

export const addComment = commentData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(commentData)
  })
    .then(res => res.json())
    .then(comment =>
      dispatch({
        type: ADD_COMMENT,
        payload: comment
      })
    );
};

export const removeComment = commentID => dispatch => {
  dispatch({
    type: REMOVE_COMMENT,
    payload: commentID
  })
}