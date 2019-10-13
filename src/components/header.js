import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.scss"

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <div className="nav mainHeading">
          <Link to="/">Zach Irvin</Link>
        </div>
        <div className="nav">
          <div className="subNav iconSubNav">
            <Link to="/contact">
              <i className="fas fa-envelope-square"></i>
            </Link>
            <a href="https://github.com/badCompany55">
              <i className="fab fa-github-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="subNav">
            <div className="mainHeading">
              <Link to="/about">About Me</Link>
            </div>
            <div className="mainHeading">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
