import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import MiniDrawer from "./MiniDrawer";
import EditIcon from "@mui/icons-material/Edit";

import { Button, CircularProgress, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { useQuery } from "@tanstack/react-query";

const columns = [
  { field: "rowValue", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Faculty name",
    width: 350,
    editable: true,
  },
  {
    field: "Actions",
    headerName: "Actions",
    width: 150,
    editable: true,
    renderCell: (cellValues) => {
      return (
        <Link href={`/EditAssignForm/${cellValues.id}`}>
          <EditIcon />
        </Link>
      );
    },
  },
];




export default function AssignForms() {
  const {data, isLoading}=useQuery({
    queryKey:['getFaculty'],
    queryFn:()=>fetch('http://localhost:5000/v1/faculty').then(res=>res.json())
  
  })

const rows=data ? data?.map((item, i)=>({
  id:item._id,
  rowValue:i+1,
  name:item.name,

})) : []

  

  return (
    <>
      {" "}
      <MiniDrawer />
      <Box sx={{ height: 400, width: "50vw", marginTop: 10, marginLeft: 40 }}>
        <Typography sx={{ marginBottom: 5 }}>
          <h2>Assign Forms</h2>
        </Typography>
        <Link href="/">Dashboard </Link>/
        <span>
          <Link href="/"> Form</Link>
        </span>
        /
        <span>
          <Link href="/AssignForms"> Assign Form</Link>
        </span>
        {
          isLoading ? <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'40px'}}><CircularProgress /></div>
        :
        <DataGrid
          sx={{ marginTop: 15 }}
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
        }
      </Box>
    </>
  );
}
