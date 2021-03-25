import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'

//Redux
import { connect } from 'react-redux';
import { getUserData } from '../Redux/Actions/userAction';
import { unrequestItem } from '../Redux/Actions/itemAction'
import GoogleMap from '../components/GoogleMap';

class RequestSummary extends Component {

    constructor(props){
        super(props)
        this.handleUnrequest = this.handleUnrequest.bind(this)
    }

    componentDidMount(){
        this.props.getUserData()
    }

    handleUnrequest(itemId){
        this.props.unrequestItem(itemId)
    }

    render() {
      return <div>
        <h1>request summary page</h1>
        {
            this.props.user.requests.map(request => (
                //add a key identifier, request.requestId
                <h2>
                {request.itemId}
                {request.requestStatus}
                <button onClick = { () => {this.handleUnrequest(request.itemId)}}>cancel request</button>
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
  
  RequestSummary.propTypes = {
    user: PropTypes.object.isRequired
  };

  const mapDispatchToProps = dispatch => bindActionCreators(
    { getUserData, unrequestItem }
, dispatch);

  
  //export default connect(mapStateToProps)(Profile);
  export default connect(mapStateToProps, mapDispatchToProps)(RequestSummary)