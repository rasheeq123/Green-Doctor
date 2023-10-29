import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/main'
import Home from './components/main/Home'
import Login from './components/main/Login'
import User from './components/user'
import Profile from './components/user/Profile'
import { ThemeProvider, createTheme } from '@mui/material';


function App() {

  const theme = createTheme({
      
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='main' element={<Main/>}>
             <Route path='home' element={<Home/>}/>
             <Route path='login' element={<Login/>}/>

          </Route>
          <Route path='user' element={<User/>}>
             <Route path='profile' element={<Profile/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
