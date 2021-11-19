import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import { AppState } from '../../../core/store/store';
import Header from '../../components/common/header';
import Main from '../../components/common/main';
import Profile from '../../components/common/profile';
import ProfilePage from '../profile/profile';

 
const HomePage = () => {

  
  const posts = useSelector((state: AppState) => state.posts.posts);
  useEffect(() => {
      console.log(posts);
  }, [posts]);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path='/home' component={Main} />
        <Route path='/profilePage'>
            <ProfilePage post={posts} />
        </Route>
      </div>
    </BrowserRouter>
  );
};
 
export default HomePage;
