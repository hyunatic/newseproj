import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Approve from '../components/ApprovalPage/Approve'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
class Approval extends Component {
//state havent put yet ( look at status page for information)
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
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <br/>
                            <h2>Pending Approval</h2>
                            <Approve navigate={this.Navigate} myRequest={this.props.myrequestlist}/>
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
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'requests' }]))(Approval)