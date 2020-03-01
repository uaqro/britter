import React, { Component, createContext } from "react";
import MY_SERVICE from "../services/index.js";
export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    user: {
      name: "",
      cc: "",
      email: "",
      balance: "",
      clientNumber: "",
      fixedIncome: 0,
      fixedSpend: 0,
      SavingObj: 0,
      level: 0,
      spendGoals: []
    },
    location: { longitude: 0, latitude: 0 }
  };

  componentDidMount() {}

  async isLogged() {
    const user = await MY_SERVICE.isLogged();
    this.setState({ user });
  }

  handleLocation(longitude, latitude) {
    this.setState({
      location: { longitude, latitude }
    });
  }

  handleProductSubmit = async e => {
    e.preventDefault();
    console.log(this.state.location);
    await MY_SERVICE.uploadProduct(this.state.location);
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          handleLocation: this.handleLocation,
          state: this.state,
          user: this.state.user,
          isLogged: this.isLogged
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
