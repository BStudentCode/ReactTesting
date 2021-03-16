import React, { Component } from "react";
//STATELESS FUNCTIONAL COMPONENT - CANT USE LIFECYCLE HOOKS
//({x}) object destructuring used to take props that is passed and get the totalCounters value

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
