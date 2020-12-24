import React, { Component } from "react";
import axios from "axios";
import GetChild from "./GetChild";

class GetTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: [],
    };
  }

  componentDidMount() {
    axios.get("http://192.168.100.38:6969/listings")
    .then((response) => {
      console.log(response);
      this.setState({ listing: response.data });
    });
  }

  render() {
    const { listing } = this.state;
    return (
      <div>
        {listing.map((list) => <GetChild key={list._id.$oid} list={list}/>)}
      </div>
    );
  }
}

export default GetTest;
