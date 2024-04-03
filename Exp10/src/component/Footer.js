import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white">
            <div className="container p-4">
            <section className="mb-4">
                <h5>Connect with Us</h5>
                <div className="d-flex justify-content-center">
                    <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                        <i className="fa fa-facebook"></i>
                    </Link>
                    <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                        <i className="fa fa-twitter"></i>
                    </Link>
                    <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                        <i className="fa fa-instagram"></i>
                    </Link>
                    <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                        <i className="fa fa-youtube"></i>
                    </Link>
                </div>
            </section>

                <section>
                    <h5>Newsletter Signup</h5>
                    <p>Stay updated with our latest gaming news and offers. Subscribe to our newsletter.</p>
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-5 col-12">
                                <div className="form-outline form-white mb-4">
                                    <input type="email" id="newsletterEmail" className="form-control" />
                                    <label className="form-label" htmlFor="newsletterEmail">Email address</label>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-outline-light">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </section>

                <section className="mb-4">
                    <h5>About Us</h5>
                    <p>
                    At  Gaming Forever Pvt Ltd, we are passionate gamers who share a common love for all things gaming. Founded with the mission to provide gamers with the ultimate destination for their gaming needs, we strive to offer a curated selection of the latest and greatest gaming hardware, accessories, and software. With years of experience in the industry, we understand the needs and preferences of our fellow gamers.
                    </p>
                </section>

                <section>
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/" className="text-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white">Shop</Link>
                        </li>
                        <li>
                            <Link to="/Aboutus" className="text-white">About</Link>
                        </li>
                        <li>
                            <Link to="/contactpage" className="text-white">Contact</Link>
                        </li>
                    </ul>
                </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Gaming Galaxy
            </div>
        </footer>
    );
};

export default Footer;
