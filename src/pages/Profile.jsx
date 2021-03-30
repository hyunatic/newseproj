import { MDBCol, MDBContainer, MDBRow, MDBBtn, MDBInput, MDBAnimation } from 'mdbreact'
import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProfileCard from '../components/Profile/ProfileCard'
import UploadFile from '../components/Profile/Uploadfile'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { updateProfile } from '../Redux/Actions/userAction'
import { firestoreConnect } from 'react-redux-firebase'

class Profile extends Component {
  state = {
    bio: '',
    name: localStorage.getItem("userhandle"),
    email: localStorage.getItem("username"),
    picture: localStorage.getItem("image"),
    location: '',
  }

  handleChange = (e) => { // to change state everytime you type -- question: value
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  PictureUploaded = (pic) => {
    this.setState({ picture: pic });
  }
  onSubmitAll = () => {
    const form = {
      email: this.state.email,
      handle: this.state.name,
      imageUrl: this.state.picture,
      bio: this.state.bio
    }
    //Need userId
    this.props.updateProfile(form, localStorage.getItem("userid"))
  }

  GoBack = () => this.props.history.push('/')
  render() {
    return (
      <div>
        <Navbar />
        <MDBContainer>
          <br />
          <MDBRow>
            <MDBCol size="5">
              <MDBAnimation type="slideInLeft">
              <ProfileCard profile={this.state} />
              </MDBAnimation>
            </MDBCol>
            <MDBCol size="7">
            <MDBAnimation type="slideInRight">
              <h3>Update Profile</h3>
              <hr />
              <MDBInput id='name' label="Name" value={this.state.name} icon="user" onChange={this.handleChange} >
              </MDBInput>
              <MDBInput id='bio' label="Biography" icon="user" value={this.state.bio} onChange={this.handleChange} >
              </MDBInput>
              <MDBInput id='email' label="E-mail address" icon="envelope" value={this.state.email} onChange={this.handleChange} >
              </MDBInput>
              <MDBInput id='location' label="Location" icon="map-marker" value={this.state.location} onChange={this.handleChange} >
              </MDBInput>
              <UploadFile picUpload={this.PictureUploaded} />

              <MDBRow>
                <MDBCol size="6">
                  <MDBBtn
                    onClick={this.onSubmitAll}
                    color="pink"
                    className="m-0 px-3 py-2 z-depth-0">
                    Update Profile
                            </MDBBtn>
                </MDBCol>
                <MDBCol size="6">
                  <MDBBtn
                    onClick={this.GoBack}
                    color="green"
                    className="m-0 px-3 py-2 z-depth-0">
                    Back
                            </MDBBtn>
                </MDBCol>
              </MDBRow>
              </MDBAnimation>
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
  return {
    user: state.firestore.ordered.users,
  }
}
export default compose(connect(mapStateToProps, { updateProfile }), firestoreConnect([{ collection: 'users' }]))(Profile)