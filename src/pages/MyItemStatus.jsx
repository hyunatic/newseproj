import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Pending from '../components/PendingStatus/Pending'
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
    render() {
        return (
            <div>
                <Navbar />
                <br />
                <MDBContainer>
                    <h2>Pending Status</h2>
                    <Pending navigate={this.Navigate} myRequest={this.props.myrequestlist} />
                </MDBContainer>
                <br />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    let username = localStorage.getItem("username")
    let list = []
    if (state.firestore.ordered.requests) {
        list = state.firestore.ordered.requests
        let letmyRequests = list.filter(x => x.recipient === username)
        return {
            myrequestlist: letmyRequests
        }
    }

}
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'requests' }]))(MyItemStatus)