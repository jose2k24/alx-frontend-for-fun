import React, { Component } from "react";
import picPersonOne from '../../images/pic-person-01.jpg';
import picPersonTwo from '../../images/pic-person-02.jpg';
import picPersonThree from '../../images/pic-person-03.jpg';
import '../../styles/main.css';

export default class Testimonials extends Component {
    render() {
        return (
            <section id="testimonial" class="section">
                <div class="container">
                    <header class="section-header">
                        <h2 class="section-title">Testimonials</h2>
                        <p class="section-tagline">We are more than a digital company</p>
                    </header>
                    <div class="section-body">
                        <ul class="row">
                            <li class="col-1-3">
                                <article class="card-testimonial">
                                    <img src={ picPersonOne } alt="Yuri Y. avatar" style={{width: 100, height: 100, objectFit: 'contain'}} class="card-avatar" />
                                    <blockquote class="card-quote">
                                        <p>
                                            I am completely blown away. Thanks to Techium, we’ve just launched our 5th website!
                                            <cite>Yuri Y.</cite>
                                        </p>
                                    </blockquote>
                                </article>
                            </li>
                            <li class="col-1-3">
                                <article class="card-testimonial">
                                    <img src={ picPersonTwo } alt="Dorrie S. avatar" style={{width: 100, height: 100, objectFit: 'cover'}} class="card-avatar" />
                                    <blockquote class="card-quote">
                                        <p>
                                            Thank you so much for your help. Techium company is awesome!
                                            <cite>Dorrie S.</cite>
                                        </p>
                                    </blockquote>
                                </article>
                            </li>
                            <li class="col-1-3">
                                <article class="card-testimonial">
                                    <img src={ picPersonThree } alt="Sven H. avatar" style={{width: 100, height: 100, objectFit: 'cover'}} class="card-avatar" />
                                    <blockquote class="card-quote">
                                        <p>
                                            I love your system. Definitely worth the investment. I’d be lost without Techium company.
                                            <cite>Sven H.</cite>
                                        </p>
                                    </blockquote>
                                </article>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}