import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

const Approve = ({ myRequest, navigate, toapprove, toReject }) => {
  function viewItem(itemId) {
    navigate(itemId)
  };

  const approve = (itemid) => {
    toapprove(itemid)
  }
  const reject = (itemid) => {

  }

  // console.log(myRequest)
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
          <th>Rejected</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>

        { //createdat: to format time to string
          myRequest && myRequest.filter(x => x.approved === false).map(x => {
            return (
              <tr>
                <td>{x.itemName}</td>
                <td>
                  <img src={x.imageUrl} width="100" height="100" />
                </td>
                <td>{x.description}</td>
                <td>{x.itemCondition}</td>
                <td>{x.createdAt}</td>
                <td>{x.itemStatus}</td>
                <td><MDBBtn size="sm" onClick={() => approve(x.id)} outline color="pink">Approve</MDBBtn></td>
                <td><MDBBtn size="sm" onClick={() => toReject(x.id)} outline color="pink">Reject</MDBBtn></td>
              </tr>
            )
          })}

      </MDBTableBody>
    </MDBTable>
  );
}

export default Approve;


