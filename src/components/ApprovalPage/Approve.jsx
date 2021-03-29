import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

const Approve = ({ myRequest, navigate }) => {
  function viewItem(itemId){
    navigate(itemId)
  };
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>Item Name</th>
          <th>Image</th>
          <th>Description</th>
          <th>Conditon</th>
          <th>Date Requested</th>
          <th>Status</th>
          <th>Approval</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {myRequest && myRequest.filter(x => x.requestStatus === "Pending Approval").map(x => {
          return (
            <tr>
              <td>{x.itemName}</td>
              <td>{x.imageUrl}</td>
              <td>{x.description}</td>
              <td>{x.itemCondition}</td>
              <td>{x.createdAt}</td>
              <td>{x.requestStatus}</td>
              
              <td><MDBBtn size="sm" onClick={() => viewItem(x.itemId)} color="pink">View Item</MDBBtn></td>
            </tr>
          )
        })}

      </MDBTableBody>
    </MDBTable>
  );
}

export default Approve;


 