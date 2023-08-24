import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    access_token: "",
    refresh_token: "",
    user_id: null
});

export default AuthContext; 