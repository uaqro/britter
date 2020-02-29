import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const Signup = props => {
  const [singupForm, setSignupForm] = useState({
    name: "",
    email: "",
    bankAccount: "",
    password: "",
    image: ""
  });
  const [nextStep, setNextStep] = useState(false);
  handleSubmit = () => {
    MY_SERVICE.Singup(signupForm);
    setNextStep(true);
  };
  return (
    <>
      {nextStep ? (
        <SignUpForm onSubmit={() => handleSubmit()}>
          <input
            type="text"
            name="name"
            onChange={evt =>
              setSignupForm({
                ...signUpForm,
                [evt.target.name]: evt.target.value
              })
            }
          />
          <input
            type="email"
            name="email"
            onChange={evt =>
              setSignupForm({
                ...signUpForm,
                [evt.target.name]: evt.target.value
              })
            }
          />
          <input
            type="password"
            name="password"
            onChange={evt =>
              setSignupForm({
                ...signUpForm,
                [evt.target.name]: evt.target.value
              })
            }
          />
          <input
            type="text"
            name="bankAccount"
            onChange={evt =>
              setSignupForm({
                ...signUpForm,
                [evt.target.name]: evt.target.value
              })
            }
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={evt =>
              setSignupForm({
                ...signUpForm,
                [evt.target.name]: evt.target.value
              })
            }
          />
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
