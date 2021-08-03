import React from 'react';
import cardImage from '../images/BG1.jpg'

function Content() {
    return (
        <div className="content-container pb-5">
            <div className="container text-center">
                <h1 className="p-5" data-aos="fade-left">Check them out</h1>
                <div className="content-cards">
                    <div className="row mb-5">
                        <div className="col-sm-6 mb-2">
                            <div class="card shadow " data-aos="zoom-in">
                                <img src={cardImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div class="card shadow" data-aos="zoom-in">
                                <img src={cardImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-4 mb-2">
                            <div class="card shadow" data-aos="zoom-in">
                                <img src={cardImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-2">
                            <div class="card shadow " data-aos="zoom-in">
                                <img src={cardImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 mb-2">
                            <div class="card shadow " data-aos="zoom-in">
                                <img src={cardImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
