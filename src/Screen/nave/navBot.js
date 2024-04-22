import React from "react";
import { Link,Outlet } from 'react-router-dom';
import InfoCart from "../context/infocar";
import '../css/index.css';
import '../css/home.css'

const Navebare = () => {
    return(
    <>
    <div className="container">
        <nav class="navbar">
            <img src="https://ih1.redbubble.net/image.1812649536.0160/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Logo" class="navbar-logo"/>
            <span class="navbar-text">Baratie</span>
        </nav>
    </div>
    </>
    );
}
export default Navebare;