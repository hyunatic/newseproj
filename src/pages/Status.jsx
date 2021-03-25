import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Pending from '../components/PendingStatus/Pending'

class Status extends Component {
    render() {
        return (
            <MDBContainer>
                <h2>Pending Status</h2>
                <Pending />

            </MDBContainer>
        
        );
    }
}
export default Status