import React, { Component } from "react";
import axios from "axios";

class PostTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: "",
      password: "",
      email: "",
      name: "",
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://192.168.100.38:6969/users/register", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  render() {
    const { phone, password, email, name } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>name</label>
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            value={name}
          />
          <label>phone</label>
          <input
            type="text"
            name="phone"
            onChange={this.changeHandler}
            value={phone}
          />
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
          <button type="submit" value="click me" > click me </button>
        </form>
      </div>
    );
  }
}

export default PostTest;
