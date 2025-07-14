import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import Link to use Routing
import { Link } from 'react-router-dom';
export default function ButtonAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"red"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"  sx={{ flexGrow: 1 }}color='inherit' component={Link} to="/">
            Food App
        
          </Typography>

          <Button color="inherit"component={Link} to="/blog" >Blog</Button>
          <Button color="inherit" component={Link} to="/about" >About Us </Button>

        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
