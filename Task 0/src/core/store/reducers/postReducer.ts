import { GET_POSTS, NEW_POST, postsActionTypes } from "../actionTypes/postsAcrionTypes"

interface IPostState {
  posts: Array<{}>
}

const initialState: IPostState = {
  posts: []
}

export const postsReducer = (state: IPostState = initialState, action: postsActionTypes):IPostState => {
  switch (action.type) {
    case NEW_POST:
      return {...state, posts: [...action.posts]}
    case GET_POSTS:
      return {...state, posts: action.posts}
    default:
      return {...state}
  }
}
