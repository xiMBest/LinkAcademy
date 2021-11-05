import { Dispatch } from 'redux';
import { AppState } from '../store';
import { GET_POSTS, postsActionTypes } from '../actionTypes/postsAcrionTypes';
import axios from '../../../api/index';

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
