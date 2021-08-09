import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown } from 'react-icons/fa';
import HeyImage from '../images/Hey.png';
import BlogImage from '../images/Blog.png'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

function Header({ route }) {

    function toggleFollow() {
        const pl = document.getElementById('profile-links');
        if (pl.style.display === 'block')
            pl.style.display = 'none';
        else {
            pl.style.display = 'block';
        }
    }

    return (
        <div className="header-container">
            <div className="container">
                <div className="text-center header">
                    {route === 'home' ?
                        <>
                            <h1 className="header-text text-light" data-aos="zoom-in">Hello</h1>
                            <h1 className="text-light" data-aos="zoom-in" data-aos-delay="700">This is Tushar Saxena</h1>
                            <Link to='/about' type="button" className="btn mr-2 btn-outline-light btn-lg header-btn" data-aos="zoom-in" data-aos-delay="800">About</Link>
                            <button type="button" className="btn btn-light btn-lg header-btn" data-aos="zoom-in" data-aos-delay="800" onClick={toggleFollow}>Follow</button>
                            <div className='profile-links mt-3' id='profile-links'>
                                <a href='https://www.facebook.com/tushar.saxena.56232/' target='_blank'><FaFacebookF /></a>
                                <a href='https://www.instagram.com/tsaxena4k/' target='_blank'><AiFillInstagram /></a>
                                <a href='https://www.linkedin.com/in/tushar-saxena-94b742184/' target='_blank'><AiFillLinkedin /></a>
                                <a href='https://github.com/tsaxena4k' target='_blank'><AiOutlineGithub /></a>
                            </div>
                        </>
                        : (route == 'products' || route == 'about' || route == 'blogs') ?
                            <>
                                <h1 className="header-text text-light text-uppercase" data-aos="zoom-in">{route}</h1>
                            </>
                            :
                            <>
                                <h1 className="header-text text-light" data-aos="zoom-in">404 NOT FOUND</h1>
                                <Link to='/' type="button" className="btn mr-2 btn-outline-light btn-lg header-btn">Back Home</Link>
                            </>
                    }
                    <div className="scroll-indicator"><FaAngleDoubleDown /></div>
                </div>
            </div>
            {route === 'home' || route==='blogs' ? <div className="bitemoji">
                <img src={route==='home'?HeyImage:BlogImage} data-aos="fade-right" />
            </div> : null}
        </div>
    )
}

export default Header
