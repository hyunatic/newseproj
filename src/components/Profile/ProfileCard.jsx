import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer } from 'mdbreact';

const ProfileCard = ({profile}) => {
  return (
    <div>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={profile.picture} waves />
        <MDBCardBody>
          <MDBCardTitle>Name: {profile.name}</MDBCardTitle>
          <MDBCardText>
            Email: {profile.email} <br />
            Location: {profile.location}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export default ProfileCard;