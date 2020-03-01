import React, { Component, createContext } from "react";
<<<<<<< HEAD
import MY_SERVICE from "../services/index";

=======
import MY_SERVICE from "../services/index.js";
>>>>>>> a9bcaa71a0ff59ada88101bbb667e255f752ab9e
export const MyContext = createContext();

class MyProvider extends Component {
  state = {
    user: { name: "", cc: "" },
<<<<<<< HEAD
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
    loggedUser: {}, 
  };

  componentDidMount() {
    if (document.cookie) {
      MY_SERVICE.getUser()
        .then(({ msg }) => {
          console.log(msg)
          this.setState({ loggedUser: true});
        })
        .catch(err => console.log(err));
    }
=======
    location: { longitude:0, latitude:0 }
>>>>>>> a9bcaa71a0ff59ada88101bbb667e255f752ab9e
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
<<<<<<< HEAD

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
=======
>>>>>>> a9bcaa71a0ff59ada88101bbb667e255f752ab9e
  render() {
    return (
      <MyContext.Provider value={{
        handleLocation:this.handleLocation,
<<<<<<< HEAD
        updateAction:this.update,
=======
>>>>>>> a9bcaa71a0ff59ada88101bbb667e255f752ab9e
        state: this.state
      }}>{this.props.children}</MyContext.Provider>
    );
  }
}

export default MyProvider;

