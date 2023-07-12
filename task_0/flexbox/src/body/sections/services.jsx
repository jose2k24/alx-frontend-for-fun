/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import '../../styles/main.css';

export default class Services extends Component {
    render() {
        return (
            <section id="services" class="section">
                <div class="container">
                    <header class="section-header">
                        <h2 class="section-title">Services</h2>
                        <p class="section-tagline">We work with you</p>
                    </header>
                    <div class="section-body section-services">

                        <ul class="row">
                            <li class="col-1-3">
                                <div class="card-services">
                                <h3 class="card-title"><a href="#">Design & Concept</a></h3>
                                </div>
                            </li>
                            <li class="col-1-3">
                                <div class="card-services">
                                <h3 class="card-title"><a href="#">Digital Strategy</a></h3>
                                </div>
                            </li>
                            <li class="col-1-3">
                                <div class="card-services">
                                <h3 class="card-title"><a href="#">Content Strategy</a></h3>
                                </div>
                            </li>
                            <li class="col-1-3">
                                <div class="card-services">
                                <h3 class="card-title"><a href="#">UX Design</a></h3>
                                </div>
                            </li>
                            <li class="col-1-3">
                                <div class="card-services">
                                <h3 class="card-title"><a href="#">Web Development</a></h3>
                                </div>
                            </li>
                            <li class="col-1-3">
                                <div class="card-services">
                                <h3 class="card-title"><a href="#">Social Media</a></h3>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        );
    }
}