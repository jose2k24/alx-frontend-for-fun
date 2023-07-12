/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Services from "./sections/services";
import Works from "./sections/works";
import About from "./sections/about-us";
import News from "./sections/latest-news";
import Testimonials from "./sections/testimonial";
import Contact from "./sections/contact";
import '../styles/main.css'
import picArticleTwo from './../images/pic-article-02.jpg';

export default class Main extends Component {
    render() {
        return (
            <main>
                <section class="section-hero hero-article" data-section-theme="dark" style={{backgroundImage: `url(${picArticleTwo})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <div class="container">
                        <div class="section-body">
                            <section class="section-inner">
                                <h2 class="section-title">We help you build your brand</h2>
                                <a href="#" class="button">Get Started</a>
                            </section>
                        </div>
                    </div>
                </section>

                <Services />
                
                <Works />
                
                <About />
                
                <News />
                
                <Testimonials />
            
                <Contact />
            </main>
        );
    }
}