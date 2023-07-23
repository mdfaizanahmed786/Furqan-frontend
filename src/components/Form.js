import MiniDrawer from './MiniDrawer'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Divider, Typography } from '@mui/material';
import Link from '@mui/material/Link';
function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}
const Form = () => {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  return (
    <>
    <MiniDrawer/>
    <Box sx={{ height: 400, width: '50vw',marginTop:10, marginLeft:40 }}>
    <Typography sx={{marginBottom:5}}><h2>Forms List</h2></Typography>
<Link href="/">Dashboard</Link>/<span><Link href='#'> Form</Link></span>
<Grid sx={{marginTop:10}}container justifyContent={'space-between'}>
        <Grid item xs={8}>
          <Item >Form Name</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>View</Item>
        </Grid>
       
      </Grid>
<List>
  <ListItem>
    <ListItemText primary='Math with python Admission'/>
    <Link href='/AllForms'>
    <Button  onClick={handleClick(TransitionLeft)} variant="contained" size="small">
          Mwp
        </Button></Link>
  </ListItem>
  <Divider/>
  <ListItem>
    <ListItemText primary='Recruitment'/>
    <Button variant="contained" size="small">
          DSTR
        </Button>
  </ListItem>
  
  <Divider/>

  <ListItem>
    <ListItemText primary='Front End development Admissions'/>
    <Button variant="contained" size="small">
          FEDI
        </Button>
  </ListItem>
  <Divider/>

  <ListItem>
    <ListItemText primary='Full Stack Development Admission'/>
    <Button variant="contained" size="small">
FSDI        </Button>
  <Divider/>
  </ListItem>  <Divider/> <ListItem>
    <ListItemText primary='Data Science Admission'/>
    <Button variant="contained" size="small">
          DS
        </Button>
 
  </ListItem>  <Divider/> <ListItem>
    <ListItemText primary='Mathematics Admission'/>
    <Button variant="contained" size="small">
          DSTM
        </Button>
  </ListItem>
</List>
    </Box>
    
    <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="Soja bhai !!"
        key={transition ? transition.name : ''}
      />
    </>
  )
}

export default Form