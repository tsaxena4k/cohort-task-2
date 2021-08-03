import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">tsaxena{"{ }"}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent:'flex-end'}}>
          <ul class="navbar-nav mb-lg-0">
            <li class="nav-item">
              <Link to='/' class="nav-link active" aria-current="page" href="#">Home</Link>
            </li>
            <li class="nav-item">
              <Link to='/about' class="nav-link active" aria-current="page" href="#">About</Link>
            </li>
            <li class="nav-item">
              <Link to='/products' class="nav-link active" aria-current="page" href="#">Products</Link>
            </li>
            <li class="nav-item">
              <Link to='/blogs' class="nav-link active" aria-current="page" href="#">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
