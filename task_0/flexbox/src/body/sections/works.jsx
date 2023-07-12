/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import picWorkOne from "../../images/pic-work-01.jpg";
import picWorkTwo from "../../images/pic-work-02.jpg";
import picWorkThree from "../../images/pic-work-03.jpg";
import '../../styles/main.css';

export default class Works extends Component {
    render() {
        return (
            <section id="works" class="section" data-section-theme="dark">
                <div class="container">
                    <header class="section-header">
                        <h2 class="section-title">Works</h2>
                        <p class="section-tagline">Take a look at our portfolio</p>
                    </header>
                    <div class="section-body">
                        <ul class="row">
                            <li class="col-1-3">
                                <article class="card-work">
                                <div class="card-outer">
                                    <div class="card-image">
                                    <img src={ picWorkOne } alt="pic-work-01" />
                                    </div>
                                    <div class="card-inner">
                                    <h3 class="card-title"><a href="#">Interior Design</a></h3>
                                    </div>
                                </div>
                                </article>
                            </li>
                            <li class="col-1-3">
                                <article class="card-work">
                                <div class="card-outer">
                                    <div class="card-image">
                                    <img src={ picWorkTwo } alt="pic-work-02" />
                                    </div>
                                    <div class="card-inner">
                                    <h3 class="card-title"><a href="#">Web Development</a></h3>
                                    </div>
                                </div>
                                </article>
                            </li>
                            <li class="col-1-3">
                                <article class="card-work">
                                <div class="card-outer">
                                    <div class="card-image">
                                    <img src={ picWorkThree } alt="pic-work-03" />
                                    </div>
                                    <div class="card-inner">
                                    <h3 class="card-title"><a href="#">Personal Development</a></h3>
                                    </div>
                                </div>
                                </article>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}