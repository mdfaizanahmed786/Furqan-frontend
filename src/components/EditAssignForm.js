import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MiniDrawer from './MiniDrawer';
import { Box } from '@mui/material';
import { Button, Typography } from '@mui/material';

export default function CheckboxListSecondary() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (<>
    <MiniDrawer/>
    <Box sx={{marginLeft:40 , marginTop:20}}>
    <Typography sx={{marginBottom:5}}><h2> Edit Assign Forms</h2></Typography>
    <Grid sx={{marginTop:10}}container >
        <Grid item xs={6}>
          <Item >Form Name</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>View</Item>
        </Grid>
       
      </Grid>
    <List dense sx={{ width: '70%', bgcolor: 'background.paper' }}>
      {[0 , 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
              <ListItemButton>
              
              <ListItemText  primary="Math With Python" />

            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
            <Button sx={{marginLeft:50,marginTop:10}} variant="contained" color="success">
        Save
      </Button>
    </Box>
    </>);
}
