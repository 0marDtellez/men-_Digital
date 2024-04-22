import React, { useContext, useState } from 'react';
import { CartContext } from './carritoContext';
import { useForm } from 'react-hook-form';
import { collection,addDoc } from 'firebase/firestore';
import { data } from '../../Fire/meFire';
import { Link } from 'react-router-dom';
import Navebare from '../nave/navBot';
import Factura from '../menu/factura/Factu';
import '../css/home.css'
const ChechAut = () => {
  //
  const [ pedidoId, setPedidoId ] = useState("");
  //datacarr
  const {carrito,preTotal,vaciaCarri } = useContext(CartContext);
  //form envio
  const {register,handleSubmit} = useForm();
  const comprar = (dat)=>{
    const pedido ={
      cliente:dat,
      producto:carrito,
      // comen:comen,
      totalApa:preTotal()
    }
    // console.log(pedido);
    const pedidoRef = collection (data,"pedido");
    addDoc(pedidoRef,pedido)
      .then((doc) => {
        setPedidoId(doc.id)
      })
  }
  if(pedidoId){
    vaciaCarri()
    return(
      <>
      <div><Navebare/></div>
      <br/>
      <div className="container">
      <div className='card-container'>
        <div className='fondo'>
          <h1>Gracias por tu compra</h1>
          <p>Tu numero de pedido es: {pedidoId}</p>
          {/* <div>
            <h1>Factura</h1>
            {cliente.map((item) => (
            <div key={item.id}>
              <h2 class="card-title">Nombre: {item.nombre}</h2>
              <p class="card-text">Fecha: {item.Fecha}</p>
              <p class="card-text">Mesa: {item.mesa}</p>
              <p class="card-text">Telefono: {item.telefono}</p>
            </div>
            ))}   
            {carrito.map((item) => (
            <div key={item.id}>
              <h2 class="card-title">Nombre: {item.Nombre}</h2>
              <p class="card-text">precio: {item.Precio}</p>
            </div>
            ))}
          <p className="card-text">Total {preTotal()}</p>
          </div>
          <div>
              <button onClick={generarPDF}>factura</button>
          </div> */}
        </div>
        <div className="container-fluid">
          <a className="navbar-brand">
              <Link className="nav-link active" aria-current="page" to="">Baraty</Link>
          </a>
        </div>
        </div>
        </div>
      </>
    )
  }
  return (
    <>
    <div><Navebare/></div>  
    <div className="row justify-content-md-center">
      <div className="card">
        <h1 className="">Finalizar compra</h1>
        <form className="" onSubmit={handleSubmit(comprar)}>
            <input
              className="form-control"
              type="text"
              placeholder="Ingresá tu nombre"
              {...register("nombre")}
            />
            <br/>
            <input
              className="form-control"
              type="text"
              placeholder="Ingresá tu mesa"
              {...register("mesa")}
            />
            <br/>
            <input
              className="form-control"
              type="phone"
              placeholder="Ingresá tu teléfono"
              {...register("telefono")}
            />
            <div className="btn-group">
              <button  id="realizarCompra" className="btn" type="submit">Comprar</button>
              <Link className="btn" to="/carro">cancelar compra</Link>
            </div>
            <div className="">
              <h4>precio total: {preTotal()}</h4>
            </div>
        </form>
      </div>
      {/* <div className='card'><Factura/></div> */}
    </div>
    </>
  )
}

export default ChechAut
