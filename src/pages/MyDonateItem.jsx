import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAnimation } from "mdbreact";
import PendingApproval from '../components/PendingStatus/PendingApproval'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { collectItem } from '../Redux/Actions/itemAction'
import Approved from '../components/PendingStatus/Approved';
import Rejected from '../components/PendingStatus/Rejected';


class MyDonateItem extends Component {
    state = {
        username: localStorage.getItem("username")
    }
    Navigate = (itemId) => {
        this.props.history.push("/itemDetails/" + itemId)
    }
    GoBack = () => { this.props.history.push("/") }

    collectitem = (itemId) => {
        console.log(itemId)
        this.props.collectItem(itemId)
    }

    render() {
        return (
            <div>
                <Navbar />
                <br />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol size="12">
                            <MDBAnimation type='slideInUp'>
                                <h2>Donation items pending for Approval</h2>
                                <PendingApproval navigate={this.Navigate} myRequest={this.props.itemlist} />
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="12">
                            <MDBAnimation type='slideInUp'>
                                <h2>Approved Items</h2>
                                <Approved navigate={this.Navigate} myRequest={this.props.itemlist} />
                            </MDBAnimation>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol size="12">
                            <MDBAnimation type='slideInUp'>
                                <h2>Rejected Items</h2>
                                <Rejected navigate={this.Navigate} myRequest={this.props.itemlist} />
                            </MDBAnimation>
                            <MDBBtn outline color="green" onClick={this.GoBack} > Back
                       </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <br />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => {
    //let list = []
    // if (state.firestore.ordered.requests) {
    //     list = state.firestore.ordered.requests
    //     let letmyRequests = list.filter(x => x.recipient === username)
    //     console.log("letmyrequest: "+ letmyRequests)
    //     return {
    //         myrequestlist: letmyRequests,

    //     }
    // }
    return {
        itemlist: state.firestore.ordered.items,
    }

}
export default compose(connect(mapStateToProps, { collectItem }), firestoreConnect([{ collection: 'items' }]))(MyDonateItem)
