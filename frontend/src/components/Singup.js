import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import MY_SERVICE from "../services/index";
import styled from "styled-components";

const Signup = props => {
  const [cc, setCC] = useState("");
  const [password, setPassword]
  const [nextStep, setNextStep] = useState(true);
  handleSubmit = () => {
    MY_SERVICE.signup({cc, password});
    setNextStep(true);
  };
  return (
    <>
      {nextStep ? (
        <SignUpForm onSubmit={() => handleSubmit()}>
          <p>Regístrate con tu cuenta HSBC</p>
          <input type="text" onChange={evt=>setCC(evt.target.value)}/>
          <input type="password" onChange={evt=>setPassword(evt.target.value)}/>
          <button>Register</button>
        </SignUpForm>
      ) : (
        <Redirect
          to={{
            pathname: "/wellcome"
          }}
        />
      )}
    </>
  );
};

export default Signup;
