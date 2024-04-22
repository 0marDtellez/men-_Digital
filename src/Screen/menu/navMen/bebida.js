import React, {useState,useEffect,useContext} from "react";
import {Link} from "react-router-dom";
import {collection,getDoc,getDocs,deleteDoc, doc} from "firebase/firestore";
import { data } from "../../../Fire/meFire";
import "../../css/stilo.css"
import Agre from "../../context/agregar";
import { CartContext } from "../../context/carritoContext"; 
import Fin from "../../nave/end";

const Bebidas = () => {
    //botones
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < 20 && setCantidad(cantidad + 1)
    }
    const { carrito, agreProdCarr } = useContext(CartContext);
    // console.log(carrito);
    //configuracion hoocks
    const[entradas,setEntradas] = useState([]);
    const[menu,setMenu] = useState([]);
    const[postre,setPostre] = useState([]);
    const[bebidas,setBebidas] = useState([]);
    //referencia data
    const bebidasCollection = collection(data,"bebidas")
    //
    const getBebidas = async ()=>{
        const data = await  getDocs(bebidasCollection);
        // console.log(data.docs)
        setBebidas(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
        //console.log(menu)
    }
    useEffect(()=>{
        getBebidas()
    })
    return(
    <>
    <div className="container">
        <div className="">
        <h1>Menú</h1>
        <div className="btn-group">
            <Link className="buton" to="/Entrada">Entrada</Link>
            <Link className="buton" to="/PlatoPrins">Plato prinsipal</Link>
            <Link className="buton" to="/Postre">Postre</Link>
            <Link className="buton" to="/platos">Menú</Link>
        </div>
        {bebidas.map((menu) => (
            <div  class="card-container" key={menu.id}>
                <div class="card">
                    <div class="img-container">
                        <img src={`${menu.imagen}`} alt="..." class="background-image" />
                    </div>
                    <div class="card-content">
                        <h2 class="card-title">{menu.Nombre}</h2>
                        <p class="card-text">Descripcion:{menu.Descri}</p>
                        <p class="card-text">Precio:${menu.Precio}</p>
                        <div class="button-container">
                            {/* <Link class="button-primary" to={`/info/${menu.id}`}>Información</Link> */}
                            <Agre handleAgregar={()=>{agreProdCarr(menu,cantidad)}}/>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
        <Fin/>
    </div>
    </>
    );
}
export default Bebidas;