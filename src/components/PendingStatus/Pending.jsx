import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

const Pending = ({ myRequest, navigate,collectItem }) => {
  function viewItem(itemId){
    navigate(itemId)
  };

  function collect(itemId){
    collectItem(itemId)
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
          <th>Collected</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        
        {myRequest && myRequest.filter(x => x.itemStatus === "PendingCollection" && x.recipient === localStorage.getItem("userhandle")).map(x => {
          return (
            <tr>
              <td>{x.itemName}</td>
              <td>{x.createdAt}</td>
              <td>{x.itemStatus}</td>
              <td><MDBBtn size="sm" onClick={() => viewItem(x.id)} outline color="pink">View Item</MDBBtn></td>
              <td><MDBBtn size="sm" onClick={() => collect(x.id)} outline color="pink">Collect Item</MDBBtn></td>
            </tr>
          )
        })}

      </MDBTableBody>
    </MDBTable>
  );
}

export default Pending;