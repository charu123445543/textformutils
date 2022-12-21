//wrtite rfc here to get react based componenet

import React from 'react'

//write impt to import 
import PropTypes from 'prop-types'


export default function Navbar ( props ) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${ props.mode } bg-${ props.mode }`}>
                <a className="navbar-brand" href="/">
                    {props.title}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                {props.aboutText}
                            </a>
                        </li>

                    </ul>
                    {/* <div className="d-flex">
                        <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode( 'primary' ) }} style={{ width: '20px', height: '20px', cursor: 'pointer' }}></div>

                        <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode( 'danger' ) }} style={{ width: '20px', height: '20px', cursor: 'pointer' }}></div>


                        <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode( 'success' ) }} style={{ width: '20px', height: '20px', cursor: 'pointer' }}></div>

                        <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode( 'warning' ) }} style={{ width: '20px', height: '20px', cursor: 'pointer' }}></div>

                    </div> */}


                </div>
                {/* onClicck ko function chaiye hota hai.....functional call nhi....isliye we have used arrow function */}

                <div className={`form-check form-switch text-${ props.mode === 'light' ? 'dark' : 'light' }`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
                </div>
            </nav>

        </div>
    )
}

//func name.proptypes
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: "this is the defaultt ttle",
    aboutText: "this is ithe default text"

}