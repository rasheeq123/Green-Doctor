import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user')) //JSON.parse convert json into jsx 
    )
    const [loggedIn, setLoggedIn ] = useState(currentUser!==null);

    
    const logout = () =>{
        setLoggedIn(false);
        sessionStorage.removeItem('user');
        // navigate('/login');
    }
    return <AppContext.Provider value={{loggedIn, setLoggedIn, logout}}>
        {children}
    </AppContext.Provider>
    
} 

const useAppContext = () => useContext(AppContext); 

export default useAppContext;