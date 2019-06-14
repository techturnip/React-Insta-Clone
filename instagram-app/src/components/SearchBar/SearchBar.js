import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faCompass,
  faHeart,
  faUser
} from "@fortawesome/free-regular-svg-icons";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand mr-auto" href="#">
            <span className="logo-icon">
              <FontAwesomeIcon size="lg" icon={faInstagram} />
            </span>{" "}
            <span className="brand">Insta-Clone</span>
          </a>
          <form class="form-inline my-2 my-lg-0 mx-auto">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
          </form>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon size="lg" icon={faCompass} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon size="lg" icon={faHeart} />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon size="lg" icon={faUser} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
