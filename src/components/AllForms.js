import { Box, Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import MiniDrawer from "./MiniDrawer";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
const AllForms = () => {
  const queryClient = new QueryClient();
  const navigate = useNavigate();
 const [formData, setFormData]=useState({
    name:'',
    emailId:'',
    phoneNumber:'',
    schoolName:'',
    yearOfStudy:'',
    "willLaptopBeUsed":false,
    "reason":""

 })
  const choice = [
    {
      value: true,
      label: "Yes",
    },
    {
      value: false,
      label: "No",
    },
  ];

  const addForm=async()=>{
    
    const res=await fetch('http://localhost:5000/v1/form/add',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    const data=await res.json()
    return data
  }

  const {mutate, isLoading}=useMutation({
    mutationKey:['postForm'],
    mutationFn:addForm,
    onSuccess:()=>{
      queryClient.invalidateQueries('getForms')
      navigate('/')

    }
  })
 
  return (
    <>
      <MiniDrawer />
      <Box
        sx={{
          "& > :not(style)": {
            marginLeft: 40,
            marginTop: 8,
            marginBottom: 1,
            width: "50ch",
          },
        }}
      >
        <Typography sx={{ marginBottom: 1 }}>
          <h2>All Forms</h2>
        </Typography>
        <Link href="/">Dashboard</Link>
        <span>
          /<Link href="/AllForms"> All Form</Link>
        </span>
        <Divider sx={{ width: "70vw" }} />
        <Link href="/AllForms">Mwp</Link>
        <Link href="#">DSTR</Link>
        <Link href="#">FEDI</Link>
        <Link href="#">FSDI</Link>
        <Link href="#">DS</Link>
        <Link href="#">DSTM</Link>
        <Link href="#">TEST</Link>
        <Typography
          sx={{ marginBottom: 1, textAlign: "center", color: "#1976d2" }}
        >
          <h3>Math With Python - Registration Form</h3>
        </Typography>
        <Box component="form" sx={{ marginTop: 1 }} autoComplete="off">
          <TextField
            id="standard-basic"
            label="Name"
            onChange={(e)=>setFormData({...formData, name:e.target.value})
            }
            variant="standard"
            sx={{ margin: 1, width: "50vw" }}
          />
          <TextField
            id="standard-basic"
            label="Email id"
            onChange={(e)=>setFormData({...formData, emailId:e.target.value})
            }
            variant="standard"
            sx={{ margin: 1, width: "50vw" }}
          />
          <TextField
            id="standard-basic"
            
            onChange={(e)=>setFormData({...formData, phoneNumber:e.target.value})
            }
            label="Phone no"
            variant="standard"
            sx={{ margin: 1, width: "50vw" }}
          />
          <TextField
            id="standard-basic"
            label="School Name"
            onChange={(e)=>setFormData({...formData, schoolName:e.target.value})
            }
            variant="standard"
            sx={{ margin: 1, width: "50vw" }}
          />

          <TextField
            id="outlined-select-currency"
            select
            onChange={(e)=>setFormData({...formData, willLaptopBeUsed:e.target.value})
            }
            label="Do you use laptop"
            defaultValue="false"
            helperText="Reason for the above "
          >
            {choice.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <FormControl sx={{ margin: 1 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Year of Study
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e)=>setFormData({...formData, yearOfStudy:e.target.value})
            }
            >
              <FormControlLabel
                value="Year 6"
                control={<Radio />}
                label=" Year 6"
              />
              <FormControlLabel
                value="Year 7"
                control={<Radio />}
                label="Year 7"
              />
              <FormControlLabel
                value="Year 8"
                control={<Radio />}
                label="Year 8"
              />
              <FormControlLabel
                value="Year 9"
                control={<Radio />}
                label="Year 9"
              />
            </RadioGroup>
            <TextField
              id="standard-multiline-static"
              label="Why do you want to join this course"
              onChange={(e)=>setFormData({...formData, reason:e.target.value})
            }
              multiline
              rows={4}
            />
            <Button variant="contained" color="success" onClick={()=>mutate()}>
             {isLoading ? 'Loading...':'Save'}
            </Button>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default AllForms;
