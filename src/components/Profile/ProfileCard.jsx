import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBContainer } from 'mdbreact';

const ProfileCard = () => {
  return (
    <div>
      <MDBCard style={{ width: "22rem" }}>
        {/* <MDBCardImage className="img-fluid" src={profilepic} waves /> */}
        <MDBCardBody>
          <MDBCardTitle>Name</MDBCardTitle>
          <MDBCardText>
            Email <br />
                
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}

export default ProfileCard;