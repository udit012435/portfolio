import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid bg-light">
          <a className="navbar-brand"><h1><span className=" text-danger">#</span>mee</h1></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About_me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="education">Education</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="employment">Employment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="awards">Awards</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="contact">Contact</Link>
              </li>
          
            </ul>
          </div>
        </div>
      </nav>
    );
};
