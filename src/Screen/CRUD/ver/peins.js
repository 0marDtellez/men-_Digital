import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { collection,getDoc,getDocs,deleteDoc, doc } from "firebase/firestore";
import { data } from "../../../Fire/meFire";
import "../../css/index.css"
import Fin from "../../nave/end";
const VerMen = () => {
    //configuracion hoocks
    const[entradas,setEntradas] = useState([]); 
    const[menu,setMenu] = useState([]);
    const[postre,setPostre] = useState([]);
    const[bebidas,setBebidas] = useState([]);
    //referencia data
    const entradaCollection = collection(data,"entradas")
    const menuCollection = collection(data,"menu")
    const postreCollection = collection(data,"postre")
    const bebidasCollection = collection(data,"bebidas")
    //
    const getMenu = async ()=>{
        const data = await  getDocs(menuCollection);
        // console.log(data.docs)
        setMenu(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
        //console.log(menu)
    }
    const getEntrada = async ()=>{
        const data = await  getDocs(entradaCollection);
        // console.log(data.docs)
        setEntradas(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
        //console.log(menu)
    }
    const getPostre = async ()=>{
        const data = await  getDocs(postreCollection);
        // console.log(data.docs)
        setPostre(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
        //console.log(menu)
    }
    const getBebidas = async ()=>{
        const data = await  getDocs(bebidasCollection);
        // console.log(data.docs)
        setBebidas(
            data.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
        //console.log(menu)
    }
    //delete
    const deleteMenu = async (id) => {
        const confirmDelete = window.confirm("¿Estas seguro de borrar este Producto?");
        if (confirmDelete) {
          const menuDoc = doc(data, "menu", id);
          await deleteDoc(menuDoc);
          getMenu();
          const entradaDoc = doc(data, "entradas", id);
          await deleteDoc(entradaDoc);
          getEntrada();
          const postreDoc = doc(data, "postre", id);
          await deleteDoc(postreDoc);
          getPostre();
          const bebidasDoc = doc(data, "bebidas", id);
          await deleteDoc(bebidasDoc);
          getBebidas();
        }
      };
    useEffect(()=>{
        getMenu()
        getEntrada()
        getPostre()
        getBebidas()
    })
    return(
    <>
    <br/>
    <div className="btn-group">
        <Link className="buton" to="/CrearEntrada">Crear Entrada</Link>
        <Link className="buton" to="/CrearPlatoPrins">Crear plato prinsipal</Link>
        <Link className="buton" to="/CrearPostre">Crear postre</Link>
        <Link className="buton" to="/CrearBebida">Crear bebida</Link>
        <Link className="buton" to="/Pedidos">Pedidos</Link>
        {/* <Link className="buton" to="/formPrueba">fromulario</Link> */}
    </div>
    <div>
    {entradas.map((menu) => (
    <div class="cardi"  key={menu.id}>
        <div className="content">
            <div class="image">
                <img src={`${menu.imagen}`} alt="Imagen"/>
            </div>
            <div class="text">
                <h2>{menu.Nombre}</h2>
                <p>{menu.Precio}</p>
                <p>{menu.Descri}</p>
                <h3 className="ul">Listado:</h3>
                <table>
                    <thead>
                        <table>
                            <thead>
                                <td>
                                {menu.ingredPrinip.map((ingr) => (
                                <tr><td className="ul">{ingr.ingrePri}</td><br/></tr>
                                ))}
                                </td>
                            </thead>
                        </table>
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
                        <div class="btn-group" role="group" aria-label="Vertical button group">
                            <Link className="buton" to={`/EditarEntrada/${menu.id}`}>editar</Link>
                            <button className="buton"  onClick={()=>{deleteMenu(menu.id)}}>Borrar</button>
                        </div>
                        </td>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    ))}
    {menu.map((menu) => (
    <div class="cardi"  key={menu.id}>
        <div className="content">
            <div class="image">
                <img src={`${menu.imagen}`} alt="Imagen"/>
            </div>
            <div class="text">
                <h2>{menu.Nombre}</h2>
                <p>{menu.Precio}</p>
                <p>{menu.Descri}</p>
                <h3 className="ul">Listado:</h3>
                <table>
                    <thead>
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
                        <div class="btn-group" role="group" aria-label="Vertical button group">
                            <Link className="buton" to={`/editar/${menu.id}`}>editar</Link>
                            <button className="buton"  onClick={()=>{deleteMenu(menu.id)}}>borrar</button>
                        </div>
                        </td>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    ))}
    {postre.map((menu) => (
    <div class="cardi"  key={menu.id}>
        <div className="content">
            <div class="image">
                <img src={`${menu.imagen}`} alt="Imagen"/>
            </div>
            <div class="text">
                <h2>{menu.Nombre}</h2>
                <p>{menu.Precio}</p>
                <p>{menu.Descri}</p>
                <h3 className="ul">Listado:</h3>
                <table>
                    <thead>
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
                        <div class="btn-group" role="group" aria-label="Vertical button group">
                            <Link className="buton" to={`/EditarPostre/${menu.id}`}>editar</Link>
                            <button className="buton"  onClick={()=>{deleteMenu(menu.id)}}>borrar</button>
                        </div>
                        </td>
                    </thead>
                </table>
            </div>
        </div>
    </div>
    ))}
    {bebidas.map((menu) => (
    <div class="cardi"  key={menu.id}>
        <div className="content">
            <div class="image">
                <img src={`${menu.imagen}`} alt="Imagen"/>
            </div>
            <div class="text">
                <h2>{menu.Nombre}</h2>
                <p>{menu.Precio}</p>
                <p>{menu.Descri}</p>
            </div>
            <table>
                <thead>
                    {/* <td>
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
                    </td> */}
                    <td className="ul">
                    <div class="btn-group" role="group" aria-label="Vertical button group">
                        <Link className="buton" to={`/editarBebida/${menu.id}`}>editar</Link>
                        <button className="buton"  onClick={()=>{deleteMenu(menu.id)}}>borrar</button>
                    </div>
                    </td>
                </thead>
            </table>
        </div>
    </div>
    ))}
    </div>
    <Fin />
    </>
    );
}
export default VerMen;