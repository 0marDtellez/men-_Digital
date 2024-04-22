import React, { useContext } from 'react';
import { CartContext } from '../carritoContext';
import '../../css/stilo.css'
import { useNavigate,useParams } from "react-router-dom";

const VaciarCar = () => {
    const {vaciaCarri } = useContext(CartContext);
    const navigate = useNavigate();
    const handleVaciar=()=>{
    const confirmacion = window.confirm('¿Va a baciar el carroto?');
    if (confirmacion) {
      alert('los productos que a eleguido se ban a borrar ');
    //   vaciaCarri();
    navigate('/check');
    } else {
      alert('Has cancelado.');
    }
  }
  return (
    <>
    {/* <!-- Botones flotantes --> */}
    <div class="">
      <button className="boton-flotante" onClick={handleVaciar}>🗑️</button>
    </div>
    </>
  );
};

export default VaciarCar;