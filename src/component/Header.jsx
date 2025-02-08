import { Button } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
function Header() {
  const [login, setLogin] = useState("Login");

  return (
    <header>
      <nav>
        <h1>
          <Link className="nav-link" to={"/"}>
            <img src={logo} alt="logo" height={42}/>
          </Link>
        </h1>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <Button
          variant="contained"
          size="small"
          sx={{ marginLeft: "auto", backgroundColor: "#0a0f53" }}
          onClick={() => {
            setLogin(login === "Login" ? "Logout" : "Login");
          }}
        >
          {login}
        </Button>
      </nav>
    </header>
  );
}

export default Header;
