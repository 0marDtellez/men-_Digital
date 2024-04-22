import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/stilo.css'
import { CartContext } from './carritoContext';
import { useNavigate,useParams } from "react-router-dom";
import VaciarCar from './botones/Vaciar';

const InfoCart = () => {
  const {cantiCarri} = useContext(CartContext);
  const {preTotal,vaciaCarri } = useContext(CartContext);
  //navegacin
  const navigate = useNavigate();
  const handleVaciar=()=>{
    const confirmacion = window.confirm('¿Va a baciar el carroto?');
    if (confirmacion) {
      alert('los productos que a eleguido se ban a borrar ');
      vaciaCarri();
    } else {
      alert('Has cancelado.');
    }
  }
  const handleClick = () => {
    const confirmacion = window.confirm('¿Va a baciar el carroto?');
    if (confirmacion) {
      alert('los productos que a eleguido se ban a borrar ');
      navigate('/check');
    } else {
      alert('Has cancelado.');
    }
  }
  return (
    <>
    {/* <!-- Botones flotantes --> */}
    <div class="botones-flotantes">
      <a href="#" class="boton-flotante">
        <Link className = "btn position-relative" aria-current="page" to="/carro">
        🛒<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cantiCarri()}</span></Link>
      </a>
      {/* <VaciarCar /> */}
      <button className="boton-flotante" onClick={handleVaciar}>🗑️</button>
      <button className="boton-flotante" onClick={handleClick}>☑️</button>
    </div>
    {/* /infoPresio/ */}
    <div className="floating-header">
      <h4>precio total: {preTotal()}</h4>
    </div>
    </>
  );
};

export default InfoCart;
