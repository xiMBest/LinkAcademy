import { createStore, combineReducers, applyMiddleware, Action, compose } from 'redux';
import thunk from 'redux-thunk';
import { postsReducer } from './reducers/postReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const rootReducer = combineReducers({
    posts: postsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
