import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import User from "./components/user";
import Profile from "./components/user/Profile";
import { Switch, ThemeProvider, createTheme } from "@mui/material";
import Admin from "./components/admin";
import ManageUser from "./components/admin/ManageUser";
import ResetPassword from "./components/main/ResetPassword";
import Prediction from "./components/user/Prediction";
import History from "./components/user/History";
import Dashboard from "./components/user/Dashboard";
import { AppProvider } from "./context/AppContext";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { DarkMode } from "@mui/icons-material";


function App() {
  const {user , loginWithRedirect } = useAuth0();
  console.log("current user : " ,user);
  // const theme = createTheme({});
  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',

      },
    },
  });
  

  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
        <BrowserRouter>
        <Auth0Provider
        domain="dev-spgtplnzvs7tyejk.us.auth0.com"
        clientId="szAycWeYU35FJ5t1GW3A631ThP59ENpo"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
          <AppProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/main/home" />} />
              <Route path="main" element={<Main />}>
                <Route path="home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="resetpassword" element={<ResetPassword />} />
              </Route>

              <Route path="user" element={<User />}>
                <Route path="profile" element={<Profile />} />
                <Route path="prediction/:Category" element={<Prediction />} />
                <Route path="prediction" element={<Prediction />} />
                <Route path="history" element={<History />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Route>

              <Route path="admin" element={<Admin />}>
                <Route path="manageuser" element={<ManageUser />} />
              </Route>
            </Routes>
          </AppProvider>
          </Auth0Provider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
