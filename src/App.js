import { useContext, useState } from 'react'; 

import LoginPage from "./components/login/login"
import HomePage from "./components/home/home";
import AuthContext from "./context/authContext";

import './index.css';


function App() {
  const userInfo = useContext(AuthContext);

  const authDetails = JSON.parse(localStorage.getItem("authDetails"))
  //<LoginPage/>
  return (
    <AuthContext.Provider value={authDetails}>
      {userInfo.isLoggedIn && <HomePage/>}
      {!userInfo.isLoggedIn && <HomePage/>}
    </AuthContext.Provider>
  );
}

export default App;
