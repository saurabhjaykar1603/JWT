import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary py-3 text-light sticky-top">
        <div class="container-fluid">
          <Link class="navbar-brand text-light fw-bold" to="/">
            React JWT
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active text-light fw-bold"
                  aria-current="page"
                  to=""
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light fw-bold" to="/protected">
                  Protected
                </Link>
              </li>{" "}
              <li class="nav-item">
                <Link class="nav-link text-light fw-bold" to="/signup">
                  Signup
                </Link>
              </li>{" "}
              <li class="nav-item">
                <Link class="nav-link text-light fw-bold" to="/login">
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
