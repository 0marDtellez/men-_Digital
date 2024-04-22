import React, { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { collection,getDoc,getDocs,deleteDoc, doc } from "firebase/firestore";
import { data } from "../../Fire/meFire";

const MosProd =()=>{
    //configuracion hoocks
    const[menu,setMenu] = useState([]);
    // const id = useParams().id
    //referencia data
    const menuCollection = collection(data,"pedido")
    //
    const getMenu = async ()=>{
        const data = await  getDocs(menuCollection);
        // console.log(data.docs)
        setMenu(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
        //fconsole.log(menu)
    }
    useEffect(()=>{
        getMenu()
    })
    return(
    <>
    <div>
    <h1>Menú</h1>
    <div className="">
    {menu.map((menu) => (
    <div class="cardi"  key={menu.id}>
        <h2>Datos del Pedido</h2>
        <table className="content">
            <thead>
                <td>
                    <tr><td className="ul">{menu.cliente.mesa}</td><br/></tr>
                </td>
                <td>
                    <tr><td className="ul">{menu.cliente.nombre}</td><br/></tr>
                </td>
                <td>
                    <tr><td className="ul">{menu.cliente.telefono}</td><br/></tr>
                </td>
            </thead>
        </table>
        {menu.producto.map((menu)=>( 
        <div className="content">
            <div class="image">
                <img src={`${menu.imagen}`} alt="Imagen"/>
            </div>
            <div class="text">
                <h2>{menu.Nombre}</h2>
                <p>{menu.Precio}</p>
                <p>Comentario del Cliente: {menu.comments}</p>
                <h3 className="ul">Listado:</h3>
                <table>
                    <thead>
                        {/* <table>
                            <thead>
                                <td>
                                {menu.ingredPrinip.map((ingr) => (
                                <tr><td className="ul">{ingr.ingrePri}</td><br/></tr>
                                ))}
                                </td>
                            </thead>
                        </table> */}
                        <td>
                        {menu.IngredientesPrincipales.map((ingr) => (
                        <tr><td className="ul">{ingr.nombre}</td><br/></tr>
                        ))}
                        </td>
                        <td>
                        {menu.IngredientesPrincipales.map((ingr) => (
                        <tr><td className="ul">{ingr.cantidad} {ingr.peso}</td><br/></tr>
                        ))}
                        </td>
                        <td>
                        {menu.IngredientesPrincipales.map((ingr) => (
                        <tr><td className="ul">{ingr.precio}</td><br/></tr>
                        ))}
                        </td>
                        <td className="ul">
                        </td>
                    </thead>
                </table>
            </div>
        </div>
        ))}
    </div>
    ))}
        {/* {menu.map((menu) => (
        <div  class="card-container" key={menu.id}>
            <div class="card">
            {menu.producto.map((menu)=>( 
            <div>
                <div class="img-container">
                    <img src={`${menu.imagen}`} alt="..." class="background-image"/>
                </div>
                <div class="card-content">
                    <h1 class="card-title">{menu.Nombre}</h1>
                    <p class="card-text">Sugerencia:</p>
                    <p class="card-text">Precio:${menu.Precio}</p>
                    <div class="button-container">
                    </div>
                </div>
            </div>
            ))}
            <h1>${menu.totalApa}</h1>
            <button className="btn btn-dark">Aceptar pedido</button>
            </div>
        </div>
        ))} */}
        </div>
    </div>
    </>
    )
}
export default MosProd;