import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';


export default class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" style={{ "max-width": "50px", "max-height": "50px" }} />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button>
                        <i className="fas fa-cart-plus"></i>
                        My cart
                    </button>
                </Link>
            </nav>

        );
    }
}