import React from "react";
import { Link,Outlet } from 'react-router-dom';
import '../css/stilo.css'

const NveAd = () => {
    return(
    <>
    <div className="container">
        <nav class="navbar">
            <Link className="nav-link active" aria-current="page" to="/login">
                <img src="https://ih0.redbubble.net/image.1812649502.0160/raf,360x360,075,t,fafafa:ca443f4786.jpg" alt="Logo" class="navbar-logo"/>
            </Link>
            <span class="navbar-text">Baratie</span> 
            <Link className="btn btn-dark" aria-current="page" to="/VerMen">Productos</Link>
        </nav>
        <Outlet/>
    </div>
    </>
    )
}
export default NveAd;