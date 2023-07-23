import React from 'react'
import MiniDrawer from './MiniDrawer'
import TextField from '@mui/material/TextField';
import { Box, Divider, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Form from './Form'
const AllForms = () => {
  const preventDefault = (event) => event.preventDefault();
  const [age, setAge] = React.useState('');
  const choice = [
    {
      value: 'yes',label:'y'
    },
    {
      value: 'No',label:'n'
     
    }
  ];
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (<>

    <MiniDrawer />
      <Box sx={{
        '& > :not(style)': { marginLeft: 40, marginTop: 8, marginBottom: 1, width: '50ch' },
      }}>
        <Typography sx={{ marginBottom: 1 }}><h2>All Forms</h2></Typography>
        <Link href="/">Dashboard</Link><span>/<Link href='/AllForms'> All Form</Link></span>
      <Divider sx={{width: '70vw'}}/>
      <Link href='/AllForms'>Mwp</Link>
      <Link href="#">DSTR</Link>
      <Link href="#">FEDI</Link>
      <Link href="#">FSDI</Link>
      <Link href="#">DS</Link>
      <Link href="#">DSTM</Link>
      <Link href="#">TEST</Link>
        <Typography sx={{ marginBottom: 1, textAlign: 'center', color: "#1976d2" }}><h3>Math With Python - Registration Form</h3></Typography>
        <Box
          component="form"
          sx={{ marginTop: 1 }}
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Name" variant="standard" sx={{ margin: 1, width: "50vw" }} />
          <TextField id="standard-basic" label="Email id" variant="standard" sx={{ margin: 1, width: "50vw" }} />
          <TextField id="standard-basic" label="Phone no" variant="standard" sx={{ margin: 1, width: "50vw" }} />
          <TextField id="standard-basic" label="School Name" variant="standard" sx={{ margin: 1, width: "50vw" }} />
       
          <TextField
          id="outlined-select-currency"
          select
          label="Do you use laptop"
          defaultValue=".."
          helperText="Reason for the above "
        >
          {choice.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <FormControl sx={{ margin: 1 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">Year of Study</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="Year 6" control={<Radio />} label=" Year 6" />
              <FormControlLabel value="Year 7" control={<Radio />} label="Year 7" />
              <FormControlLabel value="Year 8" control={<Radio />} label="Year 8" />
              <FormControlLabel value="Year 9" control={<Radio />} label="Year 9" />
            </RadioGroup>
            <TextField
          id="standard-multiline-static"
          label="Why do you want to join this course"
          multiline
          rows={4}
        />
          <Button variant="contained" color="success">
        Save
      </Button>
          </FormControl>
        </Box>
      </Box>
  </>
  )
}

export default AllForms