/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import picAboutOne from '../../images/pic-about-01.jpg'
import '../../styles/main.css';

export default class About extends Component {
    render() {
        return (
            <section id="about" class="section">
                <div class="container about-container">
                    <header class="section-header">
                        <h2 class="section-title">About Us</h2>
                        <p class="section-tagline">Everything about us</p>
                    </header>
                    <div class="sections-body">
                        <div class="row">
                            <div class="col-1-2 about-img">
                                <img src={ picAboutOne } alt="pic-about-one" style={{width: 460, height: 460, objectFit: 'cover'}} />
                            </div>
                            <div class="col-1-2">
                                <h3>Who are we</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>
                                <h3>Our culture</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>
                                <h3>How we work</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, omnis expedita! Eum, praesentium cumque accusantium rem, sit quaerat est nisi ratione, deserunt ducimus quidem iste dicta quibusdam atque maxime cum!</p>
                            </div>
                        </div>
                    </div>
                    <div class="section-footer">
                        <a href="#" class="button">Learn more about us</a>
                    </div>
                </div>
            </section>
        )
    }
}