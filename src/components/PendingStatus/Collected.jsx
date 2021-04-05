import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

const Collected = ({ myRequest, navigate, collectItem }) => {
  function viewItem(itemId) {
    navigate(itemId)
  };
  let filteredData = myRequest.filter(x => x.itemStatus === "Collected" && x.userHandle === localStorage.getItem("name"))
  let display = filteredData.map(x => { //need to call userhandle by account 
    return (
      <tr>
        <td>{x.itemName}</td>
        <td>{x.createdAt}</td>
        <td>{x.itemStatus}</td>
        <td><MDBBtn size="sm" onClick={() => viewItem(x.id)} outline color="pink">View Item</MDBBtn></td>
     
      </tr>
    )
  })
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
      {(filteredData.length !== 0) ? display : <React.Fragment>No Data</React.Fragment>}
      </MDBTableBody>
    </MDBTable>
  );
}

export default Collected;