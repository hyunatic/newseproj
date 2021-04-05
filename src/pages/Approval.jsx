import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import Approve from '../components/ApprovalPage/Approve'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { approveItem, addRequest, rejectItem } from '../Redux/Actions/itemAction'
class Approval extends Component {
    //state havent put yet ( look at status page for information)
    state = {
        username: localStorage.getItem("name"),
        usertype: localStorage.getItem("usertype"),
        itemList: [],
    }
    ApprovalItem = (itemid) => this.props.approveItem(itemid);
    RejectItem = (itemid) => this.props.rejectItem(itemid);
    Navigate = (itemId) => this.props.history.push("/itemDetails/" + itemId)
    GoBack = () => this.props.history.push("/")

    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>

                    <MDBRow>
                        <MDBCol>
                            <MDBAnimation type='slideInUp'>
                                <br />
                                <h2>Pending Approval</h2>
                                <hr />
                                <Approve navigate={this.Navigate} myRequest={this.props.itemlist} toapprove={this.ApprovalItem} toReject={this.RejectItem} />
                            </MDBAnimation>
                            <MDBBtn outline color="green" onClick={this.GoBack} > Back
                       </MDBBtn>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
                <br />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => {

    // let username = localStorage.getItem("username");
    // let users = state.firestore.ordered.users;
    // let userhandle = users.filter((user) => user.email == username)
    // console.log(userhandle);

    return {
        itemlist: state.firestore.ordered.items,
    }
}
export default compose(connect(mapStateToProps, { approveItem, addRequest, rejectItem }), firestoreConnect([{ collection: 'items' }]))(Approval)