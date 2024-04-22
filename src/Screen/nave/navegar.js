import React from "react";
import { Link,Outlet } from 'react-router-dom';
import InfoCart from "../context/infocar";
import '../css/stilo.css'

const Nave = () => {
    return(
    <>
    <div className="container">
        <nav class="navbar">
            <Link className="nav-link active" aria-current="page" to="/login">
                <img src="https://ih1.redbubble.net/image.1812649536.0160/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Logo" class="navbar-logo"/>
            </Link>
            <span class="navbar-text">Baratie</span>
        </nav>
        <Outlet/>
    </div>
    <div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <InfoCart/>
            </li>
        </ul>
    </div>
    </>
    );
}
export default Nave;