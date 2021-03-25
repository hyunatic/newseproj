import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function Pagination() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Picture',
        field: 'picture',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Item',
        field: 'item',
        width: 270,
      },
      {
        label: 'Description',
        field: 'description',
        width: 200,
      },
      {
        label: 'Location',
        field: 'location',
        width: 100,
      },
      {
        label: 'Approval',
        field: 'approval',
        
        width: 150,
      },
      {
        label: 'Delete',
        field: 'delete',
        
        width: 100,
      },
    ],
    rows: [],
     
  });

  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} fullPagination />;
}