import React from 'react';
import { Link } from 'react-router-dom';
import {FaAngleDoubleDown} from 'react-icons/fa';
import HeyImage from '../images/Hey.png';

function Header({ route }) {
    return (
        <div className="header-container">
            <div className="container">
                <div className="text-center header">
                    {route === 'home' ?
                        <>
                            <h1 className="header-text text-light" data-aos="zoom-in">Hello</h1>
                            <h1 className="text-light" data-aos="zoom-in" data-aos-delay="700">This is Tushar Saxena</h1>
                            <Link to='/about' type="button" className="btn mr-2 btn-outline-light btn-lg header-btn" data-aos="zoom-in-right" data-aos-delay="800">About</Link>
                            <button type="button" className="btn btn-light btn-lg header-btn" data-aos="zoom-in-left" data-aos-delay="800">Follow</button>
                        </>
                        : route === 'about' ?
                            <>
                                <h1 className="header-text text-light" data-aos="zoom-in">ABOUT</h1>
                            </>
                            :route=='products'?
                            <>
                                <h1 className="header-text text-light" data-aos="zoom-in">PRODUCTS</h1>
                            </>
                            :
                            <>
                            <h1 className="header-text text-light" data-aos="zoom-in">404 NOT FOUND</h1>
                            <Link to='/' type="button" className="btn mr-2 btn-outline-light btn-lg header-btn">Back Home</Link>
                        </>
                    }
                    <div class="scroll-indicator"><FaAngleDoubleDown/></div>
                </div>
            </div>
            {route==='home'?<div className="bitemoji">
                <img src={HeyImage} data-aos="fade-right"/>
            </div>:null}
        </div>
    )
}

export default Header
