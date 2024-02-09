import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink, useNavigate } from 'react-router-dom';

const pages = [{
  text:'Home', 
  link:'/main/home'
},
{
  text: 'Admin', 
  link: '/admin'
},
{
  text: 'User',
  link:'/user/dashboard'
},
{
  text: 'Expert',
  link: '/admin'
},
{
  text: 'Manage User',
  link: '/admin/manageuser'
},
{
  text: 'Signup', 
  link: '/main/signup'
},
{
  text: 'Login',
  link: '/main/login'
}];

const settings = [{
  text: 'My Profile',
  link : '/user/profile'
},
{
  text: 'Dashboard',
  link : '/user/dashboard'
},
{
  text: 'My History',
  link: 'user/history'
},
{
  text: 'Logout'
}];

function ResponsiveAppBar(){
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar elevation={5} position="fixed" sx={{ bgcolor: '#f0f8ff'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <img
            src="/images/GD_Logo-.png"  // Update the path to your logo
            alt="Logo"
            style={{ marginRight: '10px', maxHeight: '40px' }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/main/home"
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 500,
              // letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Green Doctor
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              { pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" onClick={() => navigate(page.link)}>{page.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Image src={logo} alt="logo" /> */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Roboto',
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
           
           Green Doctor
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
              
                onClick={() => navigate (page.link)}
                key={page.text}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block',textTransform: "none", }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={ handleOpenUserMenu } sx={{ p: 0 }}>
                < Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/108568853?v=4" />
              </IconButton>

            </Tooltip>
            <Menu sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={ handleCloseUserMenu }
              >
              {settings.map((setting) => (
                <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={() => navigate(setting.link)} >{setting.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
