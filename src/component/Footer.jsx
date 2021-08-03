import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
    return (
        <footer className="footer-container pt-3 pb-3">
            <div className="container">
                <div>
                    <h2 className="text-center pt-3 pb-3" data-aos='zoom-in'>Made with ❤️ and a 💻</h2>
                </div>
                <hr></hr>
                <div class='footer-links row'>
                    <div className='footer-link-wrapper col-sm-6' data-aos='zoom-in-down'>
                        <div class='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/sign-up'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Destinations</Link>
                            <Link to='/'>Sponsorships</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper col-sm-6' data-aos='zoom-in-down'>
                        <div class='footer-link-items'>
                            <h2>Videos</h2>
                            <Link to='/'>Submit Video</Link>
                            <Link to='/'>Ambassadors</Link>
                            <Link to='/'>Agency</Link>
                            <Link to='/'>Influencer</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Social Media</h2>
                            <a href='https://www.facebook.com/tushar.saxena.56232/' target='_blank'>Facebook</a>
                            <a href='https://www.instagram.com/tsaxena4k/' target='_blank'>Instagram</a>
                            <a href='https://www.linkedin.com/in/tushar-saxena-94b742184/' target='_blank'>Linkedin</a>
                            <a href='https://github.com/tsaxena4k' target='_blank'>Github</a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="footer-end">
                    <h1>tsaxena{"{ }"}</h1>
                    <div className="social-links mb-3">
                        <a href='https://www.facebook.com/tushar.saxena.56232/' target='_blank'><FaFacebookF /></a>
                        <a href='https://www.instagram.com/tsaxena4k/' target='_blank'><AiFillInstagram /></a>
                        <a href='https://www.linkedin.com/in/tushar-saxena-94b742184/' target='_blank'><AiFillLinkedin /></a>
                        <a href='https://github.com/tsaxena4k' target='_blank'><AiOutlineGithub /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
