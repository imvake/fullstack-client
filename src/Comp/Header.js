import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse, Nav, NavItem, Navbar, NavbarToggler } from "reactstrap";
import { FaHome, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import logo from "../images/logo.png";
// import { Collapse } from "bootstrap";
function Header() {
  let [varisOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!varisOpen);
  };

  return (
    <div className="navigation">
      <Navbar light expand="md">
        <img src={logo} alt="logo" className="logo" width={100} height={50} />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={varisOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem className="nav">
              <Link to="/home">
                <FaHome />
              </Link>
            </NavItem>

            <NavItem className="nav">
              <Link to="/">
                <FaUserAlt />
              </Link>
            </NavItem>

            <NavItem className="nav">
              <Link to="/">
                <FaSignOutAlt />
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;
