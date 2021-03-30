import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

const PendingApproval = ({ myRequest, navigate, currentUser }) => {
  function viewItem(itemId){
    navigate(itemId)
  };
  //console.log(myRequest)
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>Item Name</th>
          <th>Date Requested</th>
          <th>Status</th>
          <th>View Item</th>
          <th>Userhandler</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {myRequest && myRequest.filter(x => x.itemStatus === "pendingApproval" && x.userHandle === currentUser.handle).map(x => { //need to call userhandle by account 
          return (
            <tr>
              <td>{x.itemName}</td>
              <td>{x.createdAt}</td>
              <td>{x.itemStatus}</td>
              <td><MDBBtn size="sm" onClick={() => viewItem(x.Id)} color="pink">View Item</MDBBtn></td>
             <td>{x.userHandle}</td>
            </tr>

          )
        })}

      </MDBTableBody>
    </MDBTable>
  );
}

export default PendingApproval;