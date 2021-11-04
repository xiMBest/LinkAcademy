import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from '../../components/common/header';
import Main from '../../components/common/main';
import ProfilePage from '../profile/profile';
 
const HomePage = () => {
  return (
    <Router>
      <div>
        <Header />
        <Main />

        
        <Switch>
            <Route path="/profilePage">
              <ProfilePage />
            </Route>
        </Switch>
      </div>
    </Router>
  );
};
 
export default HomePage;
