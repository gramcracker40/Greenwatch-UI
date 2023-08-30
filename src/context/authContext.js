import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    accessToken: "",
    refreshToken: "",
    userID: null
});

export default AuthContext; 