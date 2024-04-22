import { useContext, useState } from "react";
import ItemCount from './itemCount'
import { CartContext } from "./carritoContext";
import Agre from "./agregar";
import '../css/stilo.css'
import { Link } from "react-router-dom";
import Fin from "../nave/end";

const Detalles = ( {item} ) => {
  //
  const { carrito, agreProdCarr } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
}
const handleSumar = () => {
    cantidad < 1 && setCantidad(cantidad + 1)
} 
  //
  console.log(carrito);
  return (
    <>
    <div className="espa"></div>
    <div className="container">
      <div className="">
        <div  class="card-container" key={item.id}>
          <div class="card" >
            <div class="img-container">
              <img src={`${item.imagen}`} alt="..." class="background-image"/>
            </div>
            <div class="card-content">
              <h2 class="card-title">{item.Nombre}</h2>
              <p class="card-text">Precio:${item.Precio}</p>
              <table>
                <thead>
                  <td>
                  {item.ingredPrinip.map((ingr) => (
                  <tr><td className="ul">{ingr.ingrePri}</td><br/></tr>
                  ))}
                  </td>
                  <td>
                  {item.IngredientesPrincipales.map((ingr) => (
                  <tr><td className="ul">{ingr.nombre}</td><br/></tr>
                  ))}
                  </td>
                </thead>
              </table>
              <div class="button-container">
                <Link class="button-primary" aria-current="page" to="/platos">Menu</Link>
                <Agre class="button-primary" 
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={()=>{agreProdCarr(item,cantidad)}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Fin />
    </>
  )
}

export default Detalles;