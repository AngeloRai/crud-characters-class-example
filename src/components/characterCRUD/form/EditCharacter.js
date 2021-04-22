import React, { Component } from "react";
import axios from "axios";

import CharacterForm from "./CharacterForm";

// Update crUd

class EditCharacter extends Component {
  state = {
    name: "",
    occupation: "",
    weapon: "",
    debt: false,
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ih-crud-api.herokuapp.com/characters/${this.props.match.params.id}`
      );
      this.setState({ ...response.data });
    } catch (err) {
      console.error(err);
    }
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
      const response = await axios.put(
        `https://ih-crud-api.herokuapp.com/characters/${this.props.match.params.id}`,
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
    // console.log(this.props);
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

export default EditCharacter;
