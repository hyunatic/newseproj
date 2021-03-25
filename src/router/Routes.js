import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/LoginPage';
import Listing from '../pages/Listing';
import ApproveItems from '../pages/ApproveItems';
import BallotItems from '../pages/BallotItems';
import Donation from '../pages/Donation';
import Main from '../pages/Main'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import itemDetails from '../pages/ItemDetails'
import DonationSummary from '../pages/DonationSummary'
import Logout from '../pages/Logout'
import MyItemStatus from '../pages/MyItemStatus'

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/listing' component={Listing} />
        <Route exact path='/approveItems' component={ApproveItems} />
        <Route exact path='/ballotItems' component={BallotItems} />
        <Route path='/donation' component={Donation} />
        <Route path='/signup' component={Signup} />
        <Route exact path='/profile' component={Profile} />
        <Route path = '/itemDetails/:itemId' component = {itemDetails}/>
        <Route exact path = '/profile/donationSummary' component = {DonationSummary}/>
        <Route path = '/logout' component = {Logout}/>
        <Route path='/status' component={MyItemStatus} />
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
