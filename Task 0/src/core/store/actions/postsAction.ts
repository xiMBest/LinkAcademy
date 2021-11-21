import { Dispatch } from 'redux';
import { AppState } from '../store';
import { GET_POSTS, NEW_POST, postsActionTypes } from '../actionTypes/postsAcrionTypes';
import axios from '../../../api/index';

export const postPosts = (description: string) => {
  return (dispatch: Dispatch<postsActionTypes>, getState: () => AppState ) => {
    axios.post("/posts", {post: {description}})
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      dispatch({type: NEW_POST, posts: [...data, description]});
    })
  }
}

export const getPosts = () => {
  return (dispatch: Dispatch<postsActionTypes>, getState: () => AppState) => {
    axios.get("/posts")
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      dispatch({type: GET_POSTS, posts: [...data]});
    })
  }
}
