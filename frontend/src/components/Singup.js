import React, { useState } from "react";
import styled from "styled-components";

const Signup = props => {
  const [singupForm, setSignupForm] = useState({
    name: "",
    email: "",
    bankAccount: "",
    image: ""
  });
  const [saveGoal, setSaveGoal] = useState({ name: "", qty: 0 });
  return (
    <SignUpForm onSubmit={() => MY_SERVICE.submitSignup()}>
      <input
        type="text"
        name="name"
        onChange={evt =>
          setSignupForm({ ...signUpForm, [evt.name]: evt.value })
        }
      />
      <input
        type="email"
        name="email"
        onChange={evt =>
          setSignupForm({ ...signUpForm, [evt.name]: evt.value })
        }
      />
      <input
        type="text"
        name="bankAccount"
        onChange={evt =>
          setSignupForm({ ...signUpForm, [evt.name]: evt.value })
        }
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={evt =>
          setSignupForm({ ...signUpForm, [evt.name]: evt.value })
        }
      />
      <button>Register</button>
    </SignUpForm>
  );
};

export default Signup;
