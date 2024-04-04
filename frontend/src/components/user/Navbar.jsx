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
import { useAuth0 } from "@auth0/auth0-react";
import { Badge, CssBaseline, Modal, Paper, createTheme } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import { NightsStay, WbSunny } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";

const pages = [
  {
    text: "Home",
    link: "/main/home",
  },
  {
    text: "User",
    link: "/user/profile",
  },
  {
    text: "Prediction",
    link: "/user/dashboard",
  },

  {
    text: "History",
    link: "/user/history",
  },
  {
    link: "#",
    icon: (
      <Badge color="secondary" variant="dot">
        <MailIcon />
      </Badge>
    ),
  },
];

function ResponsiveAppBar() {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const { loggedIn, setLoggedIn, logout } = useAppContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const { loginWithRedirect, user, isLoading } = useAuth0();
  const [openModal, setOpenModal] = useState(false);

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
      text: "Messages",
      onClick: () => navigate("#"),
    },
    {
      text: "Logout",
      onClick: () => handleLogout(),
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
    setOpenModal(true);
    handleCloseUserMenu();
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleConfirmLogout = () => {
    logout();
    navigate("/main/home");
  };
  // const handleLogout = () => {
  //   logout();
  // };

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <AppBar elevation={5} position="fixed" sx={{ bgcolor: "#f0f8ff", top: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="/images/GD_Logo-.png"
            alt="Logo"
            style={{ marginRight: "10px", maxHeight: "40px" }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/main/home"
            sx={{
              mr: 10,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 545,
              fontSize: "h4.fontSize",
              color: "rgb(27, 94, 32)",
              textDecoration: "none",
              textShadow: "2px 2px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            Green Doctor
          </Typography>
          {loggedIn ? (
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
                      {page.icon}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : null}
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
              color: "rgb(27, 94, 32)",
              textDecoration: "none",
            }}
          >
            Green Doctor
          </Typography>
          {loggedIn ? (
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  onClick={() => navigate(page.link)}
                  key={page.text}
                  // onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: "16px",
                    textTransform: "none",
                  }}
                >
                  {page.text}
                  {page.icon}
                </Button>
              ))}
            </Box>
          ) : null}

          {loggedIn ? (
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
                    <Typography textAlign="center" onClick={setting.onClick}>
                      {setting.text}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Modal open={openModal} onClose={handleCloseModal}>
                <Paper
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <Typography variant="h5">Confirm Logout</Typography>
                  <Typography sx={{ mt: 2 }}>
                    Are you sure you want to logout?
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      sx={{}}
                      onClick={handleConfirmLogout}
                    >
                      Yes, Logout
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Paper>
              </Modal>
            </Box>
          ) : (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  flexGrow: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => navigate("/main/login")}
                  // onClick={(e) => loginWithRedirect() }
                  sx={{
                    ml: 1,
                    borderRadius: 5,
                    textTransform: "none",
                    fontSize: "18px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => navigate("/main/signup")}
                  sx={{
                    ml: 1,
                    borderRadius: 5,
                    textTransform: "none",
                    fontSize: "18px",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
        <Tooltip
          title={`Turn on ${
            toggleDarkMode ? "light" : "dark"
          } mode`}
          arrow
        >
          <IconButton
            onClick={toggleDarkTheme}
            sx={{ position: "fixed", top: "16px", right: "80px", }}
           >

            {/* {toggleDarkMode ? <Brightness7Icon /> : <Brightness4Icon />} */}
            {toggleDarkMode ? <WbSunny sx={{color:"#333333"}} /> : <NightsStay sx={{color:"#333333"}}/>}

          </IconButton>
        </Tooltip>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;
