import React, { Component, useState } from "react";
import "../styles/login.css";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="App">
        <form className="form">
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <Button type="button" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
      </div>
    )
}

export default Login


//code from
//https://codesandbox.io/s/login-form-material-ui-u1xjl?from-embed=&file=/src/assets/jss/material-kit-react.js:0-5146