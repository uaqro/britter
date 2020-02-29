import React, { Component, createContext } from "react";
import MY_SERVICE from "../services/index.js";

class MyProvider extends Component {
  state = {
    user: { name: "", cc: "" }
  };

  render() {
    return (
      <MyContext.Provider value={{}}>{this.props.children}</MyContext.Provider>
    );
  }
}

export default MyProvider;

export const MyContext = createContext();
