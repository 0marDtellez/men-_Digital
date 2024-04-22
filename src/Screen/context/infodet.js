import { useContext, useState } from "react";
import { CartContext } from "./carritoContext";
import '../css/index.css'
import { Link } from "react-router-dom";
import Fin from "../nave/end";
 
const Infodetalles = ( {item} ) => {
  //
  const { carrito, agreProdCarr } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  //
  console.log(carrito);
  return (
    <>
    <div  class="card-container" key={item.id}>
      <div class="card" >
        <div class="card-background">
          <img src={`${item.imagen}`} alt="..." class="background-image"/>
        </div>
        <div class="card-content">
          <h2 class="card-title">{item.Nombre}</h2>
          <p class="card-text">precio: {item.Precio}</p>
          <div class="button-container">
            <table class="table">
              <thead>
              {item.IngredientesPrincipales.map((ingr) => (
                <tr>
                  <td>{ingr.nombre}</td><br/>
                </tr>
              ))}
              </thead>
            </table>
            <p class="card-text">descripcion:</p>
          </div>
        </div>
      </div>
      <li>
        <Link className="page-link" aria-current="page" to="/carro">volber</Link>
      </li>
    </div>
    <Fin />
    </>
  )
}

export default Infodetalles;