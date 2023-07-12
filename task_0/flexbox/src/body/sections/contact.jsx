/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import '../../styles/main.css';

export default class Contact extends Component {
    render() {
        return (
            <section id="contact" class="section">
                <div class="container">
                    <header class="section-header">
                        <h2 class="section-title">Contact</h2>
                        <p class="section-tagline">We’d love to hear from you!</p>
                    </header>
                    <div class="contact-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?</p>
                    </div>
                    <div class="section-footer">
                        <a href="#" class="button">Get in touch</a>
                    </div>
                </div>
            </section>
        )
    }
}