import { GET_POSTS, postsActionTypes } from "../actionTypes/postsAcrionTypes"

interface IPostState {
  posts: Array<{}>
}

const initialState: IPostState = {
  posts: []
}

export const postsReducer = (state: IPostState = initialState, action: postsActionTypes):IPostState => {
  switch (action.type) {
    case GET_POSTS:
      return {...state, posts: action.posts}
    default:
      return {...state}
  }
}
