import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/main'
import Home from './components/main/Home'
import Login from './components/main/Login'
import Signup from './components/main/Signup'
import User from './components/user'
import Profile from './components/user/Profile'
import { ThemeProvider, createTheme } from '@mui/material';
import Admin from './components/admin'
import ManageUser from './components/admin/ManageUser'
import ResetPassword from './components/main/ResetPassword'
import Prediction from './components/user/Prediction'
import { AppProvider } from './context/AppContext'



function App() {

  const theme = createTheme({
      
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <AppProvider>
        <Routes> 
          <Route path="main" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="resetpassword" element={<ResetPassword />} />
          </Route>

          <Route path="user" element={<User />}>
            <Route path="profile" element={<Profile />} />
            <Route path="prediction" element={<Prediction />} />
          </Route>

          <Route path="admin" element={<Admin />}>
            <Route path="manageuser" element={<ManageUser />}/>
          </Route>

        </Routes>
        </AppProvider>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
