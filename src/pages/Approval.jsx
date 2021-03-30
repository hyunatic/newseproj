import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation ,MDBBtn} from "mdbreact";
import Approve from '../components/ApprovalPage/Approve'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { approveItem, addRequest } from '../Redux/Actions/itemAction'
class Approval extends Component {
    //state havent put yet ( look at status page for information)
    state = {

        // username: localStorage.getItem("username")
        username: localStorage.getItem("username"),
        usertype: localStorage.getItem("usertype"),
        itemList: [],

    }



    ApprovalItem = (itemid) => {
        var today = new Date();
        const form = {
            createdAt: today.toJSON(),
            itemId: itemid,
            //itemName: item.itemName,
            // recipient: localStorage.getItem("username"),
            // requestStatus: "Pending"
        }
        this.props.approveItem(itemid);
        //this.props.addRequest(form)
        //this.props.history.push('/approval')
    }
    Navigate = (itemId) => {
        this.props.history.push("/itemDetails/" + itemId)
    }

    GoBack = () => { this.props.history.push("/") }
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
                                <Approve navigate={this.Navigate} myRequest={this.props.itemlist} toapprove={this.ApprovalItem} />
                            </MDBAnimation>
                            <MDBBtn color="green" onClick={this.GoBack} > Back
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
    // let username = localStorage.getItem("username")
    // let list = []
    // if (state.firestore.ordered.requests) {
    //     list = state.firestore.ordered.requests
    //     let letmyRequests = list.filter(x => x.recipient === username)
    //     return {
    //         myrequestlist: letmyRequests
    //     }
    // }
    let username = localStorage.getItem("username");
    let item = state.firestore.ordered.items;
    let users = state.firestore.ordered.users;
    let userhandle = users.filter((user) => user.email == username)
    console.log(userhandle);

    return {
        itemlist: state.firestore.ordered.items,
    }
}
export default compose(connect(mapStateToProps, { approveItem, addRequest }), firestoreConnect([{ collection: 'items' }, { collection: 'users' }]))(Approval)