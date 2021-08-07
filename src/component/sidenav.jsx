import React from 'react'

function sidenav() {
    return (
        <div className="sidenav-container">
            <div className="sidenav-links">
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
    )
}

export default sidenav
