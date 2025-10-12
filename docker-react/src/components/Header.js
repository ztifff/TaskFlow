import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ count = 0 }) {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="fs-5">TaskFlow</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/add" ? "active" : ""}`} to="/add">Add Task</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center text-white">
            <small className="me-2">Total</small>
            <span className="badge bg-light text-primary">{count}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}