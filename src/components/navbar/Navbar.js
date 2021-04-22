import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/character/new-character"
            >
              Create new Character
            </Link>
            {/* <Link className="nav-link" href="#">
              Features
            </Link>
            <Link className="nav-link" href="#">
              Pricing
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
