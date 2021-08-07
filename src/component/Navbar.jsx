import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillHome,AiFillProject} from 'react-icons/ai';
import {SiAboutDotMe} from 'react-icons/si';
import {FaBlog} from 'react-icons/fa';

function Navbar() {

  function toggleSidebar() {
    let sn = document.getElementById('sidebar');
    var x = document.getElementsByTagName("BODY")[0];
    sn.classList.toggle('sidenav-hide');
  }

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='/' className="navbar-brand" >tsaxena{"{ }"}</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ justifyContent: 'flex-end' }}>
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link active" aria-current="page" href="#">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/products' className="nav-link active" aria-current="page" href="#">Products</Link>
              </li>
              <li className="nav-item">
                <Link to='/blogs' className="nav-link active" aria-current="page" href="#">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="sidenav-mob-only">
        <div className="sidenav-container sidenav-hide" id="sidebar">
          <div className="sidenav-links mt-2">
            <ul className="sidenav-nav mb-lg-0">
              <li className="sidenav-item">
                <Link to='/' className="nav-link active" aria-current="page" href="#" onClick={toggleSidebar}><i><AiFillHome/></i> Home</Link>
              </li>
              <li className="sidenav-item">
                <Link to='/about' className="nav-link active" aria-current="page" href="#" onClick={toggleSidebar}><i><SiAboutDotMe/></i> About</Link>
              </li>
              <li className="sidenav-item">
                <Link to='/products' className="nav-link active" aria-current="page" href="#" onClick={toggleSidebar}><i><AiFillProject/></i> Products</Link>
              </li>
              <li className="sidenav-item">
                <Link to='/blogs' className="nav-link active" aria-current="page" href="#" onClick={toggleSidebar}><i><FaBlog/></i> Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Navbar
