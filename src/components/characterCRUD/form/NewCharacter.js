import React, { Component } from "react";
import axios from "axios";

import CharacterForm from "./CharacterForm";

// CREATE Crud

class NewCharacter extends Component {
  state = {
    name: "",
    occupation: "",
    weapon: "",
    debt: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckbox = (event) => {
    //   this.state[event.target.name] // false
    //   !this.state[event.target.name] // true
    this.setState({ [event.target.name]: !this.state[event.target.name] });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://ih-crud-api.herokuapp.com/characters",
        this.state
      );
      //   console.log(response)
      this.props.history.push("/");
      //   const win = window.open("/", "_blank");
      //   win.focus();
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    console.log(this.props);
    return (
      <CharacterForm
        state={this.state}
        handleChange={this.handleChange}
        handleCheckbox={this.handleCheckbox}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default NewCharacter;
