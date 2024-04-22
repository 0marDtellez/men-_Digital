import React from "react";
import '../css/portada.css'
import Fin from "../nave/end";
import { Link } from "react-router-dom";

const Inicio =()=>{
    return(
        <>
        <div className="body">
        <Link className="btn btn" to="/platos">
            <div className="body">
                <header>
                    <h2>Menú</h2>
                </header>
                <section>
                    <img className="sentro" src="https://ih1.redbubble.net/image.1812649536.0160/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Entrada deliciosa"/>
                    <br/><br/>
                    <h2>Bienvenidos al Baratie</h2>
                    <br/>
                    <p>Nuestra deliciosa comida te espera no dejes que se enfrié.</p>
                </section>
            </div>
        </Link>
        </div>
        <Fin />
        </>
    )
}
export default Inicio