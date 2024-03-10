import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink, useNavigate } from "react-router-dom";
import useAppContext from "../../context/AppContext";

const pages = [
  {
    text: "Home",
    link: "/main/home",
  },
  {
    text: "User",
    link: "/user/dashboard",
  },

  {
    text: "History",
    link: "/user/history",
  },
  {
    text: "Signup",
    link: "/main/signup",
  },
  {
    text: "Login",
    link: "/main/login",
  },
  {
    text: "Expert",
    link: "/admin",
  },
  {
    text: "Admin",
    link: "/admin",
  },
];

function ResponsiveAppBar() {
  const { loggedIn, setLoggedIn, logout } = useAppContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  
  const settings = [
    {
      text: "My Profile",
      onClick: () => navigate("/user/profile"),
    },
    {
      text: "Dashboard",
      onClick: () => navigate("/user/dashboard"),
    },
    {
      text: "My History",
      onClick: () => navigate("/user/history"),
    },
    {
      text: "Logout",
      onClick: () => {
        console.log('logout');
        logout(); 
        navigate("/main/home");
      },
    },
  ];
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

  const handleLogout = () => {
    logout();
    handleCloseUserMenu();
  };

  return (
    <AppBar elevation={5} position="fixed" sx={{ bgcolor: "#f0f8ff", top: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="/images/GD_Logo-.png" // Update the path to your logo
            alt="Logo"
            style={{ marginRight: "10px", maxHeight: "40px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/main/home"
            sx={{
              mr: 10,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 500,
              // letterSpacing: '.3rem',
              color: "black",
              textDecoration: "none",
            }}
          >
            Green Doctor
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(page.link)}
                  >
                    {page.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Roboto",
              fontWeight: 700,
              // letterSpacing: '.3rem',
              color: "black",
              textDecoration: "none",
            }}
          >
            Green Doctor
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                onClick={() => navigate(page.link)}
                key={page.text}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block", textTransform: "none", }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://avatars.githubusercontent.com/u/108568853?v=4"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={setting.onClick}
                  >
                    {setting.text}
                  </Typography>
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
