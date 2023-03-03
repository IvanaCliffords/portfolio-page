import React from "react";
import "./Navbar.css";
import { BsHouseDoor } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { UilListUl } from "@iconscout/react-unicons";
import { UilApps } from "@iconscout/react-unicons";
import { UilChat } from "@iconscout/react-unicons";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ({ click, show }) => {

  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-item"
            activeClass="nav-item-active"
            offset={0}
            onClick={click}
          >
              <BsHouseDoor className="navbar-icon" />
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-item"
            activeClass="nav-item-active"
            offset={50}
            onClick={click}
          >
              <FiUser className="navbar-icon" />

          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-item"
            activeClass="nav-item-active"

            offset={0}
            onClick={click}
          >
              <UilListUl className="navbar-icon" />
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-item"
            activeClass="nav-item-active"
            offset={0}
            onClick={click}
          >
              <UilApps className="navbar-icon" />
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="nav-item"
            activeClass="nav-item-active"
            offset={-60}
            onClick={click}
          >
              <UilChat className="navbar-icon" />
          </Link>
        </li>
    
      </ul>
    </div>
  );
};

export default Navbar;
