import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/LoginPage';
import Listing from '../pages/Listing';
import BallotItems from '../pages/BallotItems';
import Donation from '../pages/Donation';
import Main from '../pages/Main'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import itemDetails from '../pages/ItemDetails'
import Logout from '../pages/Logout'
import MyItemStatus from '../pages/MyItemStatus'
import Approval from '../pages/Approval'

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/listing' component={Listing} />
        <Route path='/ballotItems' component={BallotItems} />
        <Route path='/donation' component={Donation} />
        <Route path='/signup' component={Signup} />
        <Route path='/profile' component={Profile} />
        <Route path = '/itemDetails/:itemId' component = {itemDetails}/>
        <Route path = '/logout' component = {Logout}/>
        <Route path='/status' component={MyItemStatus} />
        <Route path='/approval' component={Approval} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
