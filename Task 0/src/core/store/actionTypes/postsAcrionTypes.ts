export const GET_POSTS = 'GET_POSTS';
export const NEW_POST = 'NEW_POST';

export interface postPostsAction {
  type: typeof NEW_POST,
  posts: Array<{}>
}

export interface getPostsAction {
  type: typeof GET_POSTS,
  posts: Array<{}>
}

export type postsActionTypes = getPostsAction | postPostsAction;
