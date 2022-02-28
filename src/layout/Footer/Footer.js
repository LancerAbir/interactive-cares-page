import React from "react";

const Footer = () => {
    return (
        <section className="footer__area">
            <div className="footer__top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="paddingMinus15">
                                <div className="footer__logo">
                                    <img
                                        src="/img/footer-logo.png"
                                        alt="Footer Logo"
                                    />
                                    <p>New Dimension of Learning</p>
                                </div>
                                <div className="footer__mail">
                                    <p>
                                        <i className="fas fa-envelope"></i>
                                        support@interactivecares-courses.com
                                    </p>
                                </div>
                                <div className="footer__social">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-instagram"></i>
                                    <i className="fab fa-linkedin-in"></i>
                                    <i className="fab fa-youtube"></i>
                                </div>
                                <div className="footer__policyTerms">
                                    <a href="#" className="d-block">
                                        Privacy Policy
                                    </a>
                                    <a href="#">Terms of use</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer__content paddingMinus15">
                                <p>
                                    Interactive is an One Stop Virtual Edtech
                                    Platform for Creating Employability Through
                                    Courses, Career Paths & Learning Paths
                                </p>
                            </div>
                            <div className="footer__menu d-flex justify-content-center">
                                <div className="footer__navigate">
                                    <h3 className="footer__header">Navigate</h3>

                                    <ul className="">
                                        <li>
                                            <a href="#">Courses</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#">Document</a>
                                        </li>
                                        <li>
                                            <a href="#">Support</a>
                                        </li>
                                        <li>
                                            <a href="#">Resources</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer__newsletter d-flex justify-content-center">
                                <div className="footer__news">
                                    <h3 className="footer__header">
                                        Join Our Newsletter List
                                    </h3>

                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputText">
                                                Name*
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleInputText"
                                                placeholder=" Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">
                                                Email*
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <button type="submit" className="btn">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <img
                                src="/img/SSLCommerz-Pay-With-logo-All-Size-03.png"
                                alt="All SSL"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
