import React from 'react';
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a href='/' className="navbar-brand">
                        Hidden brand
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href='/' className="nav-link active" aria-current="page" >
                                {props.title}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href='/countries' className="nav-link" >
                                Countries
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href='/' className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            onClick={props.toggleMode}
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

Nav.defaultProps = {
    title: "AkashTitle"
}

Nav.propTypes = {
    title: PropTypes.string.isRequired
}

export default Nav;