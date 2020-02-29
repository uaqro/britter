import React, { useState } from "react";
import styled from "styled-components";

const FirstGoal = props => {
  const [saveGoal, setSaveGoal] = useState({ name: "", qty: 0 });
  return (
    <SignUpForm onSubmit={() => MY_SERVICE.submitSignup()}>
      <p>Let's start with your first goal...</p>
      <p>What do you WANT in 45 days?</p>
      <input
        type="text"
        name="name"
        onChange={evt =>
          setSaveGoal({ ...saveGoal, [evt.target.name]: evt.target.value })
        }
      />
      <input
        type="number"
        name="qty"
        onChange={evt =>
          setSaveGoal({ ...signUpForm, [evt.target.name]: evt.target.value })
        }
      />
      <button>Set me up</button>
    </SignUpForm>
  );
};

export default FirstGoal;
