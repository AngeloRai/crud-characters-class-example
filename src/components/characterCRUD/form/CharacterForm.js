import React from "react";

function CharacterForm(props) {
  return (
    <form className="container my-5">
      <div className="mb-3">
        <label htmlFor="characterNameInput" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="characterNameInput"
          onChange={props.handleChange}
          value={props.state.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="characterOccupationInput" className="form-label">
          Occupation
        </label>
        <input
          type="text"
          className="form-control"
          name="occupation"
          id="characterOccupationInput"
          onChange={props.handleChange}
          value={props.state.occupation}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="characterWeaponInput" className="form-label">
          Weapon
        </label>
        <input
          type="text"
          className="form-control"
          name="weapon"
          id="characterWeaponInput"
          onChange={props.handleChange}
          value={props.state.weapon}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="characterDebtInput"
          name="debt"
          onChange={props.handleCheckbox}
          checked={props.state.debt}
        />
        <label className="form-check-label" htmlFor="characterDebtInput">
          Is in Debt?
        </label>
      </div>
      <button
        onClick={props.handleSubmit}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}

export default CharacterForm;
