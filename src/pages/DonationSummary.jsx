import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'

//Redux
import { connect } from 'react-redux';
import { getUserData } from '../Redux/Actions/userAction';
import GoogleMap from '../components/GoogleMap';

class DonationSummary extends Component {

  componentDidMount(){
    this.props.getUserData()
  }

    render() {
      return <div>
        <h1>donation summary page</h1>
        {
            this.props.user.items.map(item => (
                <h2 key = {item.itemId}>
                {item.itemName}
                {item.itemStatus}
                </h2>
            ))
        }
        
        <Link to = "/profile">
        <button>go back</button>
        </Link>
      </div>
    }
}
const mapStateToProps = (state) => ({
    user: state.user
  });
  
  DonationSummary.propTypes = {
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };

  const mapDispatchToProps = dispatch => bindActionCreators(
    { getUserData }
, dispatch);

  
  //export default connect(mapStateToProps)(Profile);
  export default connect(mapStateToProps, mapDispatchToProps)(DonationSummary)