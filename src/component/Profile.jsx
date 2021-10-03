import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div className="profile-container pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 vertically-centered mb-5">
                        <div class="card profile-card" data-aos='zoom-in'></div>
                    </div>
                    <div className="col-sm-6">
                        <div className="profile-content" data-aos='zoom-in'>
                            <h1>Hey, Tushar Saxena</h1>
                            <p>Hi there! Welcome to the profile of an upcoming graduate who is pursuing his bachelors in Computer science Engineering. Being tech-savvy and having a strong interest in coding I realise the passion that I can see turning into a profession shortly.
                                From a Pseudo web developer to a MERN stack developer(Still Learning), I tried improving my skills every single day.
                                During this phase where I have just taken a step into the industry, I am trying to gain experience, actively looking out for opportunities and internships.</p>
                            <div class='profile-links'>
                                <a href='https://www.facebook.com/tushar.saxena.56232/' target='_blank'><FaFacebookF /></a>
                                <a href='https://www.instagram.com/tsaxena4k/' target='_blank'><AiFillInstagram /></a>
                                <a href='https://www.linkedin.com/in/tushar-saxena-94b742184/' target='_blank'><AiFillLinkedin /></a>
                                <a href='https://github.com/tsaxena4k' target='_blank'><AiOutlineGithub /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// amazing work
export default Profile
