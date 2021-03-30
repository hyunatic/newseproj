import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

const Pending = ({ myRequest, navigate }) => {
  function viewItem(itemId){
    navigate(itemId)
  };
  console.log(myRequest);
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>Item Name</th>
          <th>Date Requested</th>
          <th>Status</th>
          <th>View Item</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        
        {myRequest && myRequest.filter(x => x.requestStatus === "Approved").map(x => {
          return (
            <tr>
              <td>{x.itemName}</td>
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

export default Pending;