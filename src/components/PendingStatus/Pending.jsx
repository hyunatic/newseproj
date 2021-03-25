import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const Pending = () => {
  return (
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>Pictures</th>
          <th>Name</th>
          <th>Description</th>
          <th>Date Submitted</th>
          <th>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </MDBTableBody>
    </MDBTable>
  );
}

export default Pending;