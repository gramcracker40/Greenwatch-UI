import React, { useState } from 'react';

import LoginPage from './components/login/login';
import HomePage from './components/home/home';
import AuthContext from './context/auth-context';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    function loginHandler() {
        setIsLoggedIn(true); 
    }

    return (
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn}}>
            {!isLoggedIn && <LoginPage onLogin={loginHandler}/>}
            {isLoggedIn && <HomePage/>}
        </AuthContext.Provider>
    )
}

export default App;

