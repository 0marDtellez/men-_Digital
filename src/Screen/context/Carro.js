import React, { useContext,useState } from 'react';
import ItemCount from './itemCount';
import { CartContext } from './carritoContext';
import Agre from './agregar';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/stilo.css'
import Fin from '../nave/end';
import Navebare from '../nave/navBot';

const Cart = () => {
  const {carrito,preTotal,vaciaCarri,removeItem,addComment } = useContext(CartContext);
  
  const handleVaciar=()=>{
    const confirmacion = window.confirm('¿Estas seguro/a de vaciar el carrito?');
    if (confirmacion) {
      alert('Has vaciado el carrito.');
      vaciaCarri();
    } else {
      alert('Que más vas a pedir.');
    }
  }
  //navegacin
  const navigate = useNavigate();
  const handleClick = () => {
    const confirmacion = window.confirm('¿Estás seguro de que quieres realizar esta acción?');
    if (confirmacion) {
      alert('Has aceptado la acción.');
      navigate('/check');
    }
     else {
      alert('Has cancelado la acción.');
    }
  }
  return (
    <>
    <div>
      <Navebare />
    </div>
    <div className='container'>
      <h2>Carrito de Compras</h2>
      <div>
        {
          carrito.length > 0 ?
            <>
            </>:
          <h1>No has escojido nungun producto.</h1>
        }
      </div>
      <div className='container'>
      {carrito.map((item) => (
      <div  class="card-container" key={item.id}>
        <div class="card" >
          <div class="img-container">
            <img src={`${item.imagen}`} alt="..." class="background-image" />
          </div>
          <div class="card-content">
            <h2 class="">{item.Nombre}</h2>
            <p class="card-text">precio: {item.Precio}</p>
            <p class="card-text">Dinos como quieres tu comida</p>
            <input type="text" value={item.comments} onChange={(e) => addComment(item.id, e.target.value)} />
            <br/>
            <button className="button-primary" onClick={() => removeItem(item.id)}>Retirar del carrito</button>
          </div>
        </div>
      </div>
      ))} 
    </div>
    <div class="botones-flotantes">
    <Link className="boton-flotante" to="/platos">📖</Link>
    {carrito.length > 0 ?
      <>
        <button className="boton-flotante" onClick={handleClick}>☑️</button>
        <button className="boton-flotante" onClick={handleVaciar}>🗑️</button>
      </>:
    <h1></h1>}
    </div>
    </div>
    {/* /infoPresio/ */}
    <div className="floating-header">
      <h4>precio total: {preTotal()}</h4>
    </div>
    <br/><br/>
    <Fin />
    </>
  );
};

export default Cart;