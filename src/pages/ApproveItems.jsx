import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBIcon } from "mdbreact";
import PendingItems from '../components/PendingItems';

import { connect } from 'react-redux'
import { getAllUnapprovedItems, approveItem } from '../Redux/Actions/itemAction'
import { getUserData } from '../Redux/Actions/userAction';
import { bindActionCreators } from 'redux'

class ApproveItems extends Component {

    constructor(props) {
        super(props)
        this.handleApproveItem = this.handleApproveItem.bind(this)
        this.state = {
            loading: false}
    }

    // isLoading() {
    //     document.getElementById("demo").style.cursor = "wait";
    // }

    componentDidMount() {
        this.props.getUserData()
        console.log("userData:", this.props.user.credentials)
        this.props.getAllUnapprovedItems()
        localStorage.setItem('unapprovedItem', JSON.stringify(this.props.unapproveditem));
        console.log("approval items: ",this.props.unapproveditem)
        // this.props.item.forEach(element => {
        //     console.log(element)
        // });
    }

    handleApproveItem(itemId) {
        //Need to find how to load the page dynamically
        if (this.props.user.credentials.isAdmin) {
            this.props.approveItem(itemId)
            this.props.getAllUnapprovedItems()
        }
        else {
            alert("Unauthorised. Please login as admin first.")
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        {this.state.loading && 
                            <div className="spinner-border text-danger" role="status">
                            <span className="sr-only"></span>
                          </div>}
                        {!this.state.loading && <PendingItems item={this.props.unapproveditem} approve={this.handleApproveItem} />}

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }

}
const mapStateToProps = state => {
    return {
        unapproveditem: state.item.items,
        ui: state.ui,
        user: state.user
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    { getAllUnapprovedItems, approveItem, getUserData }
    , dispatch);

//connect is a function, returns a higher order component
//higher order component is wrapping the home component
export default connect(mapStateToProps, mapDispatchToProps)(ApproveItems)