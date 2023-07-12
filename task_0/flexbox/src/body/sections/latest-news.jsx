/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import picArticleOne from '../../images/pic-article-01.jpg';
import picArticleTwo from '../../images/pic-article-02.jpg';
import picArticleThree from '../../images/pic-article-03.jpg';
import '../../styles/main.css';

export default class News extends Component {
    render() {
        return (
            <section id="latest_news" class="section">
                <div class="container">
                    <header class="section-header">
                        <h2 class="section-title">Latest News</h2>
                    </header>
                    <div class="section-body">
                        <ul class="row">
                            <li class="col-1-3">
                                <article class="card-blog">
                                    <div>
                                        <img src={ picArticleOne } alt="pic-article-one" style={{width: 305, height: 305, objectFit: 'cover'}} />
                                    </div>
                                    <p class="card-category">Career</p>
                                    <h3><a href="#">Hoc loco tenere se Triarius non potuit.</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id Sextilius factum negabat. Quo tandem modo? At eum nihili facit; Quae contraria sunt his, malane?</p>
                                    <small>By Kelly D.</small>
                                </article>
                            </li>
                            <li class="col-1-3">
                                <article class="card-blog">
                                    <div>
                                        <img src={ picArticleTwo } alt="pic-article-two" style={{width: 305, height: 305, objectFit: 'cover'}} />
                                    </div>
                                    <p class="card-category">Digital Life</p>
                                    <h3><a href="#">Ut alios omittam, hunc appello, quem ille unum secutus est.</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum mihi Piso: Quid ergo? Tum ille: Ain tandem? Non autem hoc: igitur ne illud quidem. Sed quod proximum fuit non vidit. Nos commodius agimus. An nisi populari fama?</p>
                                    <small>By William A.</small>
                                </article>
                            </li>
                            <li class="col-1-3">
                                <article class="card-blog">
                                <div>
                                    <img src={ picArticleThree } alt="pic-article-three" style={{width: 305, height: 305, objectFit: 'cover'}} />
                                </div>
                                <p class="card-category">Social</p>
                                <h3><a href="#">Bestiarum vero nullum iudicium puto.</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non igitur bene. Quid enim est a Chrysippo praetermissum in Stoicis? Pugnant Stoici cum Peripateticis. Prioris generis est docilitas, memoria; Apparet statim, quae sint officia, quae actiones.</p>
                                <small>By Frances J.</small>
                                </article>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}