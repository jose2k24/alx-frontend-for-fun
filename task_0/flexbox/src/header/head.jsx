/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import whiteLogo from '../images/logo-white.png'
import '../styles/main.css';

export default class Heading extends Component {

    render() {
        return (
            <div className="header">
                <header>
                    <div className="container">
                        <div className="header-container">
                            <div className="header-logo">
                                <a href="#">
                                    <img src={ whiteLogo } alt="Techium logo" style={{width: '160', height: '40'}} />
                                </a>
                            </div>

                            <nav className="navbar-menu">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Home</a>
                                    </li>
                                    <li className="nav-item section-services">
                                        <a href="#services" className="nav-link">Services</a>
                                    </li>
                                    <li className="nav-item section-works">
                                        <a href="#works" className="nav-link">Works</a>
                                    </li>
                                    <li className="nav-item section-about-us">
                                        <a href="#about" className="nav-link">About</a>
                                    </li>
                                    <li className="nav-item section-latest-news">
                                        <a href="#latest_news" className="nav-link">Latest news</a>
                                    </li>
                                    <li className="nav-item section-testimonial">
                                        <a href="#testimonials" className="nav-link">Testimonials</a>
                                    </li>
                                    <li className="nav-item section-contact">
                                        <a href="#contact" className="nav-link">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}