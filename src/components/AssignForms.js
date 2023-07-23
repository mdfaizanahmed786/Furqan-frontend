import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import MiniDrawer from './MiniDrawer';
import EditIcon from '@mui/icons-material/Edit';

import { Button, Typography } from '@mui/material';
import Link from '@mui/material/Link';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'Doctor name',
    width: 350,
    editable: true,
  },
  {
    field: 'Actions',
    headerName: 'Actions',
    width: 150,
    editable: true,
    renderCell :(cellValues)=>{
      return(
        <Link href='/EditAssignForm'>
<EditIcon />
        </Link>
       )
    }
  },
];

const rows = [
  { id: 1, Actions: "", firstName: 'Amena-DataScience'},
  { id: 2, Actions: 'Amruha-', firstName: 'Amruha-DataScience'},
  { id: 3, Actions: '', firstName: 'AsifKhan-FSD'},
  { id: 4, Actions: 'Amena-Ds', firstName: 'Amena-DataScience'}
];

export default function AssignForms() {
  return (
<>  <MiniDrawer/>

    <Box sx={{ height: 400, width: '50vw',marginTop:10, marginLeft:40 }}>
<Typography sx={{marginBottom:5}}><h2>Assign Forms</h2></Typography>
<Link href="/">Dashboard  </Link>/<span><Link href='/'> Form</Link></span>/<span><Link href='/AssignForms'> Assign Form</Link></span>
      <DataGrid
      sx={{marginTop:15}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { 
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box></>
    
  );
}