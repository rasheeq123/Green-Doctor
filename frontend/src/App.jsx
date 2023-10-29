import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import User from "./components/user";
import Profile from "./components/user/Profile";
import Admin from "./components/admin";
import ManageUser from "./components/admin/manageuser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="main" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route path="user" element={<User />}>
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="admin" element={<Admin />}>
            <Route path="manageuser" element={<ManageUser />}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
