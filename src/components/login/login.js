import React, { useRef, useEffect, useState } from "react";
import styles from "./login.module.css";
import logo from "../../images/logo.png";
import { EasyRequest, defHeaders, instanceURL } from "../../api/api.js"

const loginURL = "http://" + instanceURL + "/login";

function LoginPage(props) {
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [invalidCredentials, setInvalidCredentials] = useState(false); 

  // External call to instance, checking user/pass combo
  
  const loginAttemptHandler = async function(event) {
    event.preventDefault();

    try{
      let body = {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      };

      let req = await EasyRequest(loginURL, defHeaders, "POST", body);
      let status_code = req.status
      let data = req.data
      setLoginAttempts(loginAttempts + 1);
      console.log(data);
      console.log(data)
      console.log(status_code)

      if (status_code === 200) {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        localStorage.setItem("user_id", data.user_id);
        setInvalidCredentials(false);
        props.onLogin(); 
      }
      else if (status_code === 401) {
        setInvalidCredentials(true); 

      }
      else if (status_code === 500) {
        setInvalidCredentials(false);
      }
    } catch (error) {
      console.log(error)
    }
      
  }

  return (
    <div className={styles["container"]}>
      <header>
        <button className={styles["about-button"]}>About</button>
      </header>
      <h1><span>Green</span>watch</h1>
      <div className={styles["login-box"]}>
        <img src={logo} alt="No Image"></img>
        <form onSubmit={loginAttemptHandler}>
          <div className={styles["input-container"]}>
            <label htmlFor="username">Username </label>
            <input type="text" id="username" name="username" ref={usernameRef} />
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="password">Password </label>
            <input type="password" id="password" name="password" ref={passwordRef} />
          </div>
          {invalidCredentials && <p>Invalid username/password</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
