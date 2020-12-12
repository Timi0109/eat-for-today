import React, { useState } from "react";
import Title from "../Title.jsx";
import styles from "./Authentication.module.css";
import MenuBar from "../MenuBar.jsx";
import {useHistory} from "react-router-dom";
import { TextField } from '@material-ui/core';
import Footer from "../Footer.jsx";

const LoginPage = () => {
  const [page, setPage] = useState({ isLoginPage: true });
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();
  const [username, setUserName] = useState();
  
  let history = useHistory();
  const handleLogIn = () => {
    history.push({pathname:`/login/${username}`, state:{name:username}});
  };
  
  const handleSignUp = () => {
    if(!email.includes("@") || !email.includes(".")){
      alert("Email format are invalid!");
      return;
    }
    history.push("/");
  };

  let content;
  if (page.isLoginPage) {
    content = (
      <div className={styles.box}>
        <form onSubmit={() => handleLogIn()}> 
          <input className={styles.username} placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
          <br></br>
          <input className={styles.password} type="password" placeholder="Password" onChange={(e) => setPassWord(e.target.value)} required />
          <br></br>
          <button className={styles.loginBtn} type="submit"> LOGIN </button>
        </form>
      </div>
    );
  } else {
    content = (
      <div className={styles.box}>
        <form onSubmit={() => handleSignUp()}>
          <input className={styles.username} placeholder="Username" onChange={(e) => {setUserName(e.target.value)}} required />
          <br></br>
          <input className={styles.emailInput} placeholder="test@example.com" onChange={(e) => {setEmail(e.target.value)}} required />
          <br></br>
          <input className={styles.password} type="password" placeholder="Password" onChange={(e) => {setPassWord(e.target.value)}} required/>
          <br></br>
          <button className={styles.signUpBtn} type="submit"> SIGN UP </button>
        </form>
      </div>
    );
  }
  return (
    <div className={styles.main}>
        <div className={styles.menu}>
            <MenuBar ></MenuBar>
            <Title></Title>
        </div>

        <div className={styles.content}>
            <div className={styles.tabContainer}>
                <button
                className={page.isLoginPage ? styles.signUpTab : styles.signUpTabActive}
                onClick={() => setPage({ isLoginPage: false })}
                >
                Sign Up
                </button>
                <button
                className={page.isLoginPage ? styles.logInTabActive : styles.logInTab}
                onClick={() => setPage({ isLoginPage: true })}
                >
                Login
                </button>
            </div>
            {content}
        </div>
        <Footer></Footer>
    </div>
  );
};

export default LoginPage;
