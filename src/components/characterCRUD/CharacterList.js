import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CharacterList extends Component {
  state = {
    characters: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ih-crud-api.herokuapp.com/characters"
      );
      console.log(response);
      this.setState({ characters: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container my-5">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Occupation</th>
              <th scope="col">Weapon</th>
              <th scope="col">Is in debt?</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.characters.map((character) => {
              return (
                <tr key={character.id}>
                  <th scope="row">{character.id}</th>
                  <td>{character.name}</td>
                  <td>{character.occupation}</td>
                  <td>{character.weapon}</td>
                  <td>{character.debt ? "Yes" : "No"}</td>
                  <td>
                    <Link to={`/characters/${character.id}`}>
                      <i className="far fa-eye m-2"></i>
                      {/* <i className="fas fa-edit"></i> */}
                    </Link>
                    <Link to={`/character/${character.id}/edit/`}>
                      <i className="fas fa-edit m-2"></i>
                    </Link>
                    <Link to={`/character/${character.id}/delete/`}>
                      <i
                        style={{ color: "red" }}
                        class="fas fa-trash-alt m-2"
                      ></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CharacterList;
