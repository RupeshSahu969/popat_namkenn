import React from "react";
import "./navbar.css";
import { CiSearch } from "react-icons/ci";
import logo from "../../asset/logo.jpeg";
import { CiUser, CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
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

          <div className="search-bar">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search here"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <CiSearch />
              </button>
            </form>
          </div>
          <div className="">
            <img src={logo} alt="logo" className="navbar-logo" />
          </div>
          <div className="navbar-icons">
            <div>
              <CiUser size={30} />
            </div>
            <div>
              <CiHeart size={30} />
            </div>
            <div>
              <IoBagOutline size={30} />
            </div>
          </div>
        </div>
      </nav>
      <div className="navbar-data">
        <ul className="navbar-navs">
          <li>
            <Link className="nav-link" aria-current="page" to="#">
              HOME
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="#">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="#">
              POPAT NAMKEEN
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="#">
              FRESH POPAT
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="#">
              POPART SEV
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
