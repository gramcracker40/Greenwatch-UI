import { useContext, useState } from 'react'; 

import LoginPage from "./components/login/login"
import HomePage from "./components/home/home";
import AuthContext from "./context/authContext";

import './index.css';


function App() {
  const userInfo = useContext(AuthContext);

  
  return (
    <>
      {userInfo.isLoggedIn && <HomePage/>}
      {!userInfo.isLoggedIn && <LoginPage/>}
    </>
  );
}

export default App;
