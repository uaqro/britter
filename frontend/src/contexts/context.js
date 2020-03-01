import React, { Component, createContext } from "react";
import MY_SERVICE from "../services/index.js";
export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    user: { name: "", cc: "" },
    location: { longitude:0, latitude:0 }
  };

  handleLocation(longitude, latitude){
    this.setState({
      location:{longitude, latitude}
    });
  }

  handleProductSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.location);
    await MY_SERVICE.uploadProduct(this.state.location);
  }
  render() {
    return (
      <MyContext.Provider value={{
        handleLocation:this.handleLocation,
        state: this.state
      }}>{this.props.children}</MyContext.Provider>
    );
  }
}

export default MyProvider;

