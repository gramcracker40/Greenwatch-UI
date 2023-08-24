import { useState } from 'react'; 

import LoginPage from "./components/login/login"
import HomePage from "./components/home/home";
import AuthContext from "./context/authContext";

import './index.css';


function App() {
  const [loggedIn, loggedInHandler] = useState(false);

  function loginHandler() {
    loggedInHandler(true);
  }

  function logoutHandler() {
    loggedInHandler(false); 
  }

  return (
    <div>
      {!loggedIn && <LoginPage onLogin={loginHandler}/>}
      {loggedIn && <HomePage onLogout={logoutHandler}/>}
    </div>
      
  );
}

export default App;
