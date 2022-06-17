import React from 'react';
import footer from "../components/Footer.module.css";

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-lg-start bg-light text-muted">

                <div>
                    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="Images/footer-slider1 (1).png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="Images/footer-slider1 (2).png" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="Images/footer-slider1 (3).png" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>



                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom "
                >
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className='fa fa-facebook me-1'></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className='fa fa-twitter me-1'></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className='fa fa-linkedin me-1'></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className='fa fa-instagram me-1'></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className='fa fa-envelope me-1'></i>
                        </a>

                    </div>

                    <div className={footer.footerDiv}>
                        <div className="me-5 d-none d-lg-block ">
                            <img className={footer.footerImage} src='../Images/logo hindu.png' alt='.' />
                        </div>
                    </div>

                    <div className="me-5 d-none d-lg-block">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search Here" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>

                    </div>

                </section>

                <div className={footer.footerMid}>
                    <section>
                        <div className="container text-center text-md-start mt-5 border-bottom">
                            <div className="row mt-3">
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i>TRENDING TODAY
                                    </h6>

                                    <div className={footer.anchor}>
                                        <a href='https://www.thehindu.com/opinion/editorial/gst-signals/article65376087.ece'>GST Signals: On April GST Collections..... </a>
                                        <br />
                                        <a href='https://www.thehindu.com/news/national/pm-modi-directs-recruitment-of-10-lakh-people-in-next-18-months/article65525983.ece'>Train Journey Time From Mangaluru And Karwar.....</a>
                                        <br />
                                        <a href='https://www.thehindu.com/opinion/editorial/gst-signals/article65376087.ece'>India Believes There Will Be No Winner In.....</a>
                                        <br />
                                        <a href='https://www.thehindu.com/opinion/editorial/gst-signals/article65376087.ece'>FIR Against Raj Thackeray For May 1 Speech, In..... </a>
                                        <br />
                                        <a href='https://www.thehindu.com/opinion/editorial/gst-signals/article65376087.ece'>Suma Kanakala: ‘If Suma Is, Then What I..... </a>
                                    </div>
                                </div>

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i>TRENDING TOPIC</h6>
                                    <div className={footer.anchor}>
                                        <a href='https://www.thehindu.com/opinion/editorial/gst-signals/article65376087.ece'>Taxes And Duties</a>
                                        <br />
                                        <a href='https://www.thehindu.com/news/national/pm-modi-directs-recruitment-of-10-lakh-people-in-next-18-months/article65525983.ece'>Railway</a>
                                        <br />
                                        <a href='https://www.thehindu.com/opinion/editorial/gst-signals/article65376087.ece'>Prime Minister Narendra Modi</a>
                                        <br />
                                        <a href='https://www.thehindu.com/opinion/editorial/gst-signals/article65376087.ece'>The Hindu MetroPlus</a>
                                        <br />
                                    </div>
                                </div>

                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        <i className="fas fa-gem me-3"></i>TRENDING ON OUR GROUP SITES
                                    </h6>
                                    <div className={footer.anchor}>
                                        <a href='https://www.thehindu.com/opinion/editorial/gst-signals/article65376087.ece'>BUSINESSLINE</a>
                                        <br />
                                        <a href='https://www.thehindu.com/news/national/pm-modi-directs-recruitment-of-10-lakh-people-in-next-18-months/article65525983.ece'>Renewable Energy</a>
                                        <br />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className={footer.bottom}>


                    <div className={footer.bottomLeft}>
                        <section
                            className="d-flex justify-content-left justify-content-lg-between p-4  "
                        >


                            <div className={footer.bottomLeft}>
                                <a href="" className="me-4 text-reset">
                                    HOME
                                </a>
                                <a href="" className="me-4 text-reset">
                                    NEWS
                                </a>
                                <a href="" className="me-4 text-reset">
                                    CORONAVIRUS
                                </a>
                                <a href="" className="me-4 text-reset">
                                    OPINION
                                </a>
                                <a href="" className="me-4 text-reset">
                                    BUSINESS
                                </a>
                                <a href="" className="me-4 text-reset">
                                    SPORT
                                </a>
                                <a href="" className="me-4 text-reset">
                                    CROSSWORD+
                                </a>
                                <a href="" className="me-4 text-reset">
                                    COUPONS
                                </a>
                            </div>

                        </section>
                    </div>
                    <div className={footer.bottomLeft}>
                        <section
                            className="d-flex justify-content-left justify-content-lg-between p-4  "
                        >
                            <div className={footer.bottomLeft}>
                                <a href="" className="me-4 text-reset">
                                    THE SITE
                                </a>
                                <a href="" className="me-4 text-reset">
                                    About Us
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Terms of Use
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Privacy Policy
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Archive
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Print
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Subscription
                                </a>
                                <a href="" className="me-4 text-reset">
                                    ePaper
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Digital Subscription
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Rss Feeds
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Sitemap
                                </a>
                            </div>

                        </section>
                    </div>

                    <div className={footer.bottomMid}>
                        <section
                            className="d-flex justify-content-left justify-content-lg-between p-4 "
                        >
                            <div className={footer.bottomLeft}>
                                <a href="" className="me-4 text-reset">
                                    GROUP SITES
                                </a>
                                <a href="" className="me-4 text-reset">
                                    The Hindu
                                </a>
                                <a href="" className="me-4 text-reset">
                                    இந்து தமிழ் திசை
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Business Line
                                </a>
                                <a href="" className="me-4 text-reset">
                                    BL on Campus
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Sportstar
                                </a>
                                <a href="" className="me-4 text-reset">
                                    RoofandFloor
                                </a>
                                <a href="" className="me-4 text-reset">
                                    The Hindu Centre
                                </a>
                                <a href="" className="me-4 text-reset">
                                    STEP Young
                                </a>
                                <a href="" className="me-4 text-reset">
                                    World Club
                                </a>
                            </div>

                        </section>
                    </div>

                    <div className={footer.bottomRight}>
                        <section
                            className="d-flex justify-content-left justify-content-lg-between p-4 "
                        >
                            <div className={footer.bottomLeft}>
                                <a href="" className="me-4 text-reset">
                                    Publications
                                </a>
                                <a href="" className="me-4 text-reset">
                                    eBooks
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Images
                                </a>
                                <a href="" className="me-4 text-reset">
                                    Classifieds
                                </a>

                            </div>

                        </section>
                    </div>

                    <div className="text-center p-4" >
                        <p>CONTACT US Copyright© 2022, THG PUBLISHING PVT LTD.</p>
                    </div>
                </div>


            </footer>

            
        </div>
    )
}

export default Footer