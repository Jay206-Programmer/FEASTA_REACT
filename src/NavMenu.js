import React from 'react'
import {Link} from 'react-router-dom';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/custom.css';
import './css/responsive.css';

function NavMenu() {
    return (
        <div>
            <header className="top-navbar">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand" href="home">
					<img src={require("./images/logo.png").default} alt="" width="50%" height="50%" />
				</a>
				<div className="collapse navbar-collapse" id="navbars-rs-food">
					<ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                        <li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
        </div>
    )
}

export default NavMenu
