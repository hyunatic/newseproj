import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

const Collected = ({ myRequest, navigate,collectItem }) => {
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
        
        {myRequest && myRequest.filter(x => x.itemStatus === "Collected" && x.recipient === localStorage.getItem("userhandle")).map(x => {
          return (
            <tr>
              <td>{x.itemName}</td>
              <td>{x.createdAt}</td>
              <td>{x.itemStatus}</td>
              <td><MDBBtn size="sm" onClick={() => viewItem(x.id)} outline color="pink">View Item</MDBBtn></td>
            </tr>
          )
        })}

      </MDBTableBody>
    </MDBTable>
  );
}

export default Collected;