import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'

//Redux
import { connect } from 'react-redux';
import { getUserData } from '../Redux/Actions/userAction';
import GoogleMap from '../components/GoogleMap';

class Profile extends Component {

  componentDidMount(){
    this.props.getUserData()
    console.log(this.props.user.credentials)
  }

    render() {
      return <div>
        <h3>logged in as: {this.props.user.credentials.handle}</h3>
        <Link to = "/profile/donationSummary">
        <button>view donation summary</button>
        </Link>
        <Link to = "/profile/requestSummary">
        <button>view requests summary</button>
        </Link>
      </div>
    }
}
const mapStateToProps = (state) => ({
    user: state.user
  });
  
  Profile.propTypes = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };

  const mapDispatchToProps = dispatch => bindActionCreators(
    { getUserData }
, dispatch);

  
  //export default connect(mapStateToProps)(Profile);
  export default connect(mapStateToProps, mapDispatchToProps)(Profile)