export const GET_POSTS = 'GET_POSTS';

export interface getPostsAction {
  type: typeof GET_POSTS,
  posts: Array<{}>
}

export type postsActionTypes = getPostsAction;
