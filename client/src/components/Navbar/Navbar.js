import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary py-3 text-light sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light fw-bold" to="/">
            React JWT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light fw-bold"
                  aria-current="page"
                  to=""
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fw-bold" to="/protected">
                  Protected
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link text-light fw-bold" to="/signup">
                  Signup
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link className="nav-link text-light fw-bold" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
