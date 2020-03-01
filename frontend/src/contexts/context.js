import React, { Component, createContext } from "react";
import MY_SERVICE from "../services/index";

export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    user: { },
    loginForm: {
      email: "",
      password: ""
    },
    formSignup: {
      email: "",
      password: "",
      cc: "",
    },
    location: { longitude:0, latitude:0 },
    loggedUser: '', 
  };

  componentDidMount() {
    if (document.cookie) {
      MY_SERVICE.getUser()
        .then(({ data }) => {
          console.log(data)
          this.setState({ loggedUser: true, user: data.user });
          // Swal.fire(`Bienvenido de vuelta ${data.user.name} `, "", "exito");
        })
        .catch(err => console.log(err));
    }
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

  update = (prevState, payload) => {
    this.setState({
        ...prevState,
        // formSignup:{
        //     ...prevState.formSignup,
        //     ...payload
        // },
        loginForm: {
          ...prevState.loginForm,
          ...payload
        }
    })
  }
  render() {
    return (
      <MyContext.Provider value={{
        handleLocation:this.handleLocation,
        updateAction:this.update,
        state: this.state
      }}>{this.props.children}</MyContext.Provider>
    );
  }
}

export default MyProvider;

