import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      kue: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://192.168.100.38:6969/users/login", this.state, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        this.setState({ kue: document.cookie });
        console.log(this.state.kue);
      })
      .catch((error) => console.log(error));
  };

  render() {
    const { password, email, kue } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>email</label>
          <input
            type="text"
            name="email"
            onChange={this.changeHandler}
            value={email}
          />
          <label>password</label>
          <input
            type="text"
            name="password"
            onChange={this.changeHandler}
            value={password}
          />
          <button type="submit">click me </button>
        </form>
        <h1>{kue ? kue : "belum"}</h1>
      </div>
    );
  }
}

export default Login;
