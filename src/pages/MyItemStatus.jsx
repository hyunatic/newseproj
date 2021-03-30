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
                                <h2>Approved Requests / Items collected</h2>
                                <Pending navigate={this.Navigate} myRequest={this.props.myrequestlist} />
                            </MDBAnimation>
                        </MDBCol>

                    </MDBRow>
                    <MDBRow>

                        <MDBCol size="12">
                            <h2>Donation items pending for Approval</h2>
                            <PendingApproval navigate={this.Navigate} myRequest={this.props.itemlist} />
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
    
    let username = localStorage.getItem("username")
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
    }

}
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'requests', collection:'items'  }]))(MyItemStatus)
