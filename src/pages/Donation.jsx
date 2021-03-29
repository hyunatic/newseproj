import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact'
import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import DonationGoogleMap from '../components/DonationGoogleMap'
import Uploadfile from '../components/Profile/Uploadfile'

import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { donateItem } from '../Redux/Actions/itemAction'


class Donation extends Component {
  state = {
    file: '',
    lat: '',
    long: '',
    categories: ["home and living", "sports", "electronic", "toys", "clothes", "luxury", "utomobile"],
    category: '',
    name: '',
    description: '',
    location: '',
    itemCondition: ''

  };

  componentDidMount() {
    console.log(this.props.collectionlist)
  }

  PictureUploaded = (pic) => {
    console.log(pic);
    this.setState(state => ({
      ...state,
      file: pic
    }))
  };

  handleChange = (e) => {
    //console.log(this.state.name, this.state.description) // to change state everytime you type -- question: value
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleChangeMap = (e) => {
    //console.log(this.state.name, this.state.description) // to change state everytime you type -- question: value
    var selectedPoint = this.props.collectionlist.filter((point) => point.Name == e.target.value);
    //console.log(selectedPoint);
    this.setState({
      [e.target.id]: e.target.value,
      lat: selectedPoint[0].Coordinates._lat,
      long: selectedPoint[0].Coordinates._long
    })

  }

  handleSubmit = () => {
    //this.props.donateItem(form) // componentDidMount
    var today = new Date();

    const form = {
      approved: false,
      ballotTime: '',
      category: this.state.category ? this.state.category : "home and living",
      createdAt: today.toJSON(),
      description: this.state.description,
      imageUrl: this.state.file,
      itemCondition: this.state.itemCondition,
      itemName: this.state.name,
      itemStatus: "pendingApproval",
      location: this.state.location,
      requestCount: 0,
      userHandle: localStorage.getItem("username")
    }
    this.props.donateItem(form);
    alert("Thank you for your donation!");
    this.setState({
      file: '',
      lat: '',
      long: '',
      category: '',
      name: '',
      description: '',
      location: '',
      itemCondition: ''
    })
  }



  render() {
    return (
      <div>
        <Navbar />
        <MDBContainer>
          <br />
          <MDBRow>
            <MDBCol>
              <div>
                <h3>Donation</h3>
                <hr />
                <MDBCol col-md-1>
                  <MDBInput id='name' label="Item name" type="text" value={this.state.name} onChange={this.handleChange} validate error="wrong" />
                  <MDBInput id='description' type="textarea" value={this.state.description} onChange={this.handleChange} label="Enter the item description here" rows="5" />

                  <h6>Item Condition</h6>
                  <select placeholder class="browser-default custom-select" value={this.state.location} id="itemCondition" onChange={this.handleChange}>
                    <option value='WellUsed'>Well Used</option>
                    <option value='SlightlyUsed'>Slightly Used</option>
                    <option value='New'>New</option>
                  </select>

                  <h6>Select Category</h6>
                  <select placeholder class="browser-default custom-select" value={this.state.category} id="category" onChange={this.handleChange}>
                    {this.state.categories.map((each) => {
                      return (
                        <option value={each}>{each}</option>
                      )
                    })}
                  </select>

                  <p></p>

                  <h6>Upload Image</h6>
                  <Uploadfile id="image" picUpload={this.PictureUploaded} ></Uploadfile>
                </MDBCol>
                <img src={this.state.file} width='500' height='500' />

              </div>
            </MDBCol>
            <MDBCol>
              <MDBRow>
                <h3>Map Location</h3>
                <hr />
                <DonationGoogleMap lat={this.state.lat} long={this.state.long} name={this.state.location} />
              </MDBRow>

              <br />
              <br />
              <MDBRow>
                <h6>Select Drop-off Location</h6>
                <hr />
                <select class="browser-default custom-select" id="location" value={this.state.location} onChange={this.handleChangeMap}>
                  {this.props.collectionlist.map((point) => {
                    return (
                      <option value={point.Name}>{point.Name}</option>
                    )
                  })}
                </select>
                Name: {this.state.location}  <br />
                Lat: {this.state.lat} <br />
                Long: {this.state.long}
              </MDBRow>

            </MDBCol>
          </MDBRow>
          <MDBBtn color="mdb-color" onClick={this.handleSubmit}>Upload </MDBBtn>
        </MDBContainer>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemlist: state.firestore.ordered.items,
    collectionlist: state.firestore.ordered.collectionpoint,
  }
}
export default compose(connect(mapStateToProps, { donateItem }), firestoreConnect([{ collection: 'items' }, { collection: 'collectionpoint' }]))(Donation)
