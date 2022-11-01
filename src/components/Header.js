import React from 'react'
import PropTypes from 'prop-types';

export default function Header(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.link1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.link2}</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggle} id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable mode</label>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    link1: PropTypes.string,
    link2: PropTypes.string
}
Header.defaultProps = {
    title: 'TextUtils',
    link1: 'Home',
    link2: 'About'
}   