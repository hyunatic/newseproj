import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn,MDBAnimation } from "mdbreact";
import Pending from '../components/PendingStatus/Pending'
import PendingApproval from '../components/PendingStatus/PendingApproval'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'

class MyItemStatus extends Component {
    state = {
        username: localStorage.getItem("username")
    }
    Navigate = (itemId) => {
        this.props.history.push("/itemDetails/" + itemId)
    }
    GoBack = () => { this.props.history.push("/") }

    render() {
        return (
            <div>
                <Navbar />
                <br />
                <MDBContainer>
                    <MDBRow>

                        <MDBCol size="12">
                            <MDBAnimation type='slideInDown'>
                                <h2>Pending Status</h2>
                                <Pending navigate={this.Navigate} myRequest={this.props.myrequestlist} />
                            </MDBAnimation>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>

                        <MDBCol size="12">
                            <h2>Item Pending for Approval</h2>
                            <PendingApproval navigate={this.Navigate} myRequest={this.props.itemlist} currentUser={this.props.user} />
                        </MDBCol>
                        <MDBBtn color="green" onClick={this.GoBack} > Back
                       </MDBBtn>
                    </MDBRow>
                </MDBContainer>
                <br />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    let username = localStorage.getItem("username");
    let users = state.firestore.ordered.users;
    let userhandle = users.filter((user) => user.email == username)
    console.log(userhandle);


    let list = []
    // if (state.firestore.ordered.requests) {
    //     list = state.firestore.ordered.requests
    //     let letmyRequests = list.filter(x => x.recipient === username)
    //     return {
    //         myrequestlist: letmyRequests
    //     }
    // }
    return {
        itemlist: state.firestore.ordered.items,
        user: userhandle,
    }

}
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'requests', collection: 'items' }, { collection: 'users' }]))(MyItemStatus)