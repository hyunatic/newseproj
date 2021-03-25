import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';


class ItemDetails extends Component {
    state = {
        itemid: this.props.match.params.itemId,
    };
    render() {
        return (
            <div>
                <Navbar />
                <MDBContainer>
                    <br/>
                    <h2>Item Details</h2>
                    <hr/>
                    <MDBRow>
                        {this.props.itemlist && this.props.itemlist.map(x => {
                            return (
                                <MDBCol>
                                    <MDBCard style={{ width: "22rem" }}>
                                        <MDBCardImage className="img-fluid" src={x.imageUrl} waves />
                                        <MDBCardBody>
                                            <MDBCardTitle>{x.itemName} {x.category}</MDBCardTitle>
                                            <MDBCardText>
                                                {x.description} <br/>
                                                {x.location}
                                    </MDBCardText>
                                            <MDBBtn color="pink">Place Order</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            )
                        })}
                    </MDBRow>
                </MDBContainer>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.itemId;
    let list = []
    if (state.firestore.ordered.items) {
        list = state.firestore.ordered.items
        let singleitem = list.filter(x => x.id === id)
        return {
            itemlist: singleitem
        }
    }

}

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'items' }]))(ItemDetails)