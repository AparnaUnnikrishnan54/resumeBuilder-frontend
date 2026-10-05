import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.png'
import Tooltip from '@mui/material/Tooltip'

function Header() {
  const about="A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={ {backgroundColor:'rgba(20, 35, 50, 0.90)'}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight: 'bold',display:'flex',alignItems:'center' }}>
            <img src={logo} alt="rBuilder logo" style={{ width: '80px', height: '80px' }} />
            <span>rBuilder</span>
          </Typography>
          <Tooltip title={about}>
            <Button color="inherit">About Us</Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
