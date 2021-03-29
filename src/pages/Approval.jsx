import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Approve from '../components/ApprovalPage/Approve'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import { approveItem, addRequest } from '../Redux/Actions/itemAction'
class Approval extends Component {
//state havent put yet ( look at status page for information)
state = {
    
    // username: localStorage.getItem("username")
    username: localStorage.getItem("username"),
        usertype: localStorage.getItem("usertype"),
        itemList: [],
        
}



ApprovalItem = (item) => {
    const form = {
        createdAt: Date.now(),
        itemId: item.id,
        itemName: item.itemName,
        // recipient: localStorage.getItem("username"),
        // requestStatus: "Pending"
    }
    this.props.approveItem(item.id)
    this.props.addRequest(form)
    this.props.history.push('/approval')
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
                            <Approve navigate={this.Navigate} myRequest={this.props.itemlist} toapprove = {this.ApprovalItem}/>
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
    // let username = localStorage.getItem("username")
    // let list = []
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
export default compose(connect(mapStateToProps, { approveItem, addRequest }), firestoreConnect([{ collection: 'items' }]))(Approval)