import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { collection,addDoc } from "firebase/firestore";
import { data,storage } from "../../../Fire/meFire";
import {Link} from "react-router-dom"
import '../../css/index.css'
import { getDownloadURL,ref, uploadBytes } from "firebase/storage";

const FormularioDinamico = () => {
    //datos
    let url;
    const [ catego,setCatego] = useState("");
    const [ imagen,setImagen] = useState(url);
    const [ Nombre,setNombre] = useState("");
    const [ Precio,setPrecio] = useState("");
    const [ Descri,setDescri] = useState("");
    // ifoIngredientes
    const [ cantidad,setCantidad] = useState("");
    const [ nombreI,setNombreI] = useState("");
    const [ peso,setPeso] = useState("");
    const [ precioI,setPrecioI] = useState("");
    // ingredientesNormales 
    const [ ingrePrin1,setIngrePrin1 ] = useState("");
    const [ ingrePrin2,setIngrePrin2 ] = useState("");
    const [ ingrePrin3,setIngrePrin3 ] = useState("");
    const [ ingrePrin4,setIngrePrin4 ] = useState("");
    const [ ingrePrin5,setIngrePrin5 ] = useState("");
    const [ ingrePrin6,setIngrePrin6 ] = useState("");
    //
    const IngrePrinsi = [
        {ingrePri:ingrePrin1},{ingrePri:ingrePrin2},
        {ingrePri:ingrePrin3},{ingrePri:ingrePrin4},
        {ingrePri:ingrePrin5},{ingrePri:ingrePrin6}, 
    ]
    const IngForm = [
        {cantidad:cantidad,nombre:nombreI,peso:peso,precio:precioI}
    ]
    //navegacin 
    const navigate = useNavigate();
    const menuCollection = collection (data,"menuPrueba");
    const store = async (e) => {
        e.preventDefault()
        if (!imagen) {
            alert('Seleccione una imagen antes de enviar el formulario.')
            return
          }
        await addDoc( 
            menuCollection,{
                catego:catego,imagen:imagen,Nombre:Nombre,Precio:Precio,
                Descri:Descri,ingredPrinip:IngrePrinsi,IngredientesPrincipales:IngForm
            })
        navigate('/VerMen')
    }
    //Guardar imagen
    const fileHandler = (e) => {
        const archiIma = e.target.files[0];
        const refArchibo = ref(storage,`Menu/${archiIma.name}`)
        uploadBytes(refArchibo, archiIma).then(() => {
          getDownloadURL(refArchibo).then((url) => {
            setImagen(url);
          });
        });
      }
    //formulario
    const [campos, setCampos] = useState([{
        id: 1, value: '',
        cantidad:'',
        nombre:'',
        peso:'',
        precio:''
    }]);
    const agregarCampo = () => {
        const nuevoCampo = {
        id: campos.length + 1,
        value: '',
        cantidad:cantidad,
        nombre:nombreI,
        peso:peso,
        precio:precioI
        };
        setCampos([...campos, nuevoCampo]);
        console.log(campos);
        console.log(nuevoCampo);
    };
    const eliminarCampo = (id) => {
        const nuevosCampos = campos.filter(campo => campo.id !== id);
        setCampos(nuevosCampos);
    };
    const handleChange = (id, value,cantidad,nombre,peso,precio) => {
        console.log('id: '+ id);
        console.log('value: '+ value);
        const nuevosCampos = campos.map(campo => {
        if (campo.id === id) {
            return { ...campo, value,cantidad,nombre,peso,precio };
        }
        return campo;
        });
        setCampos(nuevosCampos);
    };
    return(
    <>
    <br/>
    <div className="row justify-content-md-center">
        <div className="container">
            <div className="h">
                <div>
                    <h1>crear plato</h1>
                </div>
                <br/>
                <div className="form-floating mb-3">
                <form className="row g-3 needs-validation" onSubmit={store}>
                    <table className="tablas">
                        <h3>informacion basica del producto</h3>
                        <div className="col-sm-11">
                            <h4>Cua es la categoria del producto</h4>
                            <select
                                class="form-select form-select-lg mb-1"
                                aria-label="Large select example"
                                value={catego}
                                onChange={(e) =>setCatego(e.target.value)}>
                                <option></option>
                                <option>Entradas_frías</option>
                                <option>Entradas_calientes</option>
                                <option>Plato_principal</option>
                                <option>Bebida</option>
                                <option>Postre</option>
                            </select>
                        </div>
                        <div className="col-sm-11">
                            <label>Imagen del plato</label>
                            <input
                                className="form-control"
                                value={imagen}
                                onChange={fileHandler}
                                type="file"
                            ></input>
                        </div>
                        <div className="col-sm-11">
                            <label>Nombre del alimento</label>
                            <input
                                className="form-control" 
                                placeholder="Nombre del alimento" 
                                aria-label="Nombre del alimento"
                                value={Nombre}
                                onChange={(e) =>setNombre(e.target.value)}
                                type="text"
                            ></input>
                        </div>
                        <div className="col-sm-11">
                            <label>Brebe descripcion</label>
                            <input
                                className="form-control"
                                value={Descri}
                                onChange={(e) =>setDescri(e.target.value)}
                                type="text"
                            ></input>
                        </div>
                        <div className="col-sm-11">
                            <label>Precio del alimento</label>
                            <input
                                className="form-control"
                                value={Precio}
                                onChange={(e) =>setPrecio(e.target.value)}
                                type="text"
                            ></input>
                        </div>
                    </table>
                    {/* ingredientes_principales */}
                    <table className="tablas">
                        <div className="col-sm-11">
                        <h3>ingredientes mas usados en el restaurante</h3>
                        <h4>En la reseta se usa sal</h4>
                            <select
                                class="form-select form-select-lg mb-1" 
                                aria-label="Large select example"
                                value={ingrePrin1} 
                                onChange={(e) =>setIngrePrin1(e.target.value)}>
                                <option></option>
                                <option>Si contiene Sal</option>
                                <option>No contiene Sal</option>
                            </select>
                        </div>
                        <div className="col-sm-11">
                        <h4>En la reseta se usa Pimienta</h4>
                            <select
                                class="form-select form-select-lg mb-1" 
                                aria-label="Large select example"
                                value={ingrePrin2} 
                                onChange={(e) =>setIngrePrin2(e.target.value)}>
                                <option></option>
                                <option>Si contiene Pimienta</option>
                                <option>No contiene Pimienta</option>
                            </select>
                        </div>
                        <div className="col-sm-11">
                        <h4>En la reseta se usa Azúcar</h4>
                            <select
                                class="form-select form-select-lg mb-1"
                                aria-label="Large select example"
                                value={ingrePrin3}
                                onChange={(e) =>setIngrePrin3(e.target.value)}>
                                <option></option>
                                <option>Si contiene Azúcar</option>
                                <option>No contiene Azúcar</option>
                            </select>
                        </div>
                        <div className="col-sm-11">
                        <h4>En la reseta se usa cebolla</h4>
                            <select
                                class="form-select form-select-lg mb-1"
                                aria-label="Large select example"
                                value={ingrePrin4}
                                onChange={(e) =>setIngrePrin4(e.target.value)}>
                                <option>no lleba cebolla blanca o roja</option>
                                <option>una cebolla</option>
                                <option>dos cebolla</option>
                                <option>tres cebolla</option>
                                <option>cuatro cebolla</option>
                            </select>
                        </div>
                        <div className="col-sm-11">
                        <h4>En la reseta se usa tomate</h4>
                            <select
                                class="form-select form-select-lg mb-1" 
                                aria-label="Large select example"
                                value={ingrePrin5} 
                                onChange={(e) =>setIngrePrin5(e.target.value)}>
                                <option>no lleba tomate</option>
                                <option>una tomate</option>
                                <option>dos tomate</option>
                                <option>tres tomate</option>
                                <option>cuatro tomate</option>  
                            </select>
                        </div>
                        {/* cantidad_de_hajos */}
                        <div className="col-sm-11">
                        <h4>cuantos dientes de ajo se usan</h4>
                            <select
                                class="form-select form-select-lg mb-1"
                                aria-label="Large select example"
                                value={ingrePrin6} 
                                onChange={(e) =>setIngrePrin6(e.target.value)}>
                                <option>cero dientes de ajo</option>
                                <option>un diente de ajo</option>
                                <option>dos dientes de ajo</option>
                                <option>tres dientes de ajo</option>
                                <option>cuatro dientes de ajo</option>
                            </select>
                            <h4>Si no se usan dientes de ajo, cuantas cabesas de ajo se utilizan:</h4>
                                <input
                                    className="form-control"
                                    placeholder="precio delingrediente"
                                    aria-label="precio delingrediente "
                                    value={ingrePrin6}
                                    onChange={(e) =>setIngrePrin6(e.target.value)}
                                    type="number" 
                                ></input>
                        </div>
                    </table>
                    {/* ingredientes_principales */}
                    <table className="tablas">
                        <h3>ingredientes del alimento</h3>
                        {campos.map(campo => (
                        <div className="row gx-3 gy-2 align-items-center">
                            <div className="col-sm-2">
                                <label>Cantidad</label>
                                <input
                                    className="form-control"
                                    placeholder="Cantidad"
                                    aria-label="Cantidad"
                                    value={campo.cantidad}
                                    onChange={(e) =>handleChange(e.target.value)}
                                    type="text"
                                ></input>
                            </div>
                            <div className="col-sm-2">
                                <label>Peso </label>
                                <select
                                    class="form-select form-select-sm"
                                    aria-label="Large select example"
                                    value={campo.peso}
                                    onChange={(e) =>handleChange(e.target.value)}>
                                    <option selected></option>
                                    <option>cucharadas</option>
                                    <option>tasa</option>
                                    <option>gramos</option>
                                    <option>Litros</option>
                                    <option>hojas</option>
                                    <option>ramas</option>
                                    <option>Unidades</option>
                                </select>
                            </div>
                            <div className="col-sm-5">
                                <label>Ingredientes del alimento</label>
                                <input
                                    className="form-control"
                                    placeholder="Ingrediente numero uno"
                                    aria-label="Ingrediente numero uno"
                                    value={campo.nombreI}
                                    onChange={(e) =>handleChange( e.target.value)}
                                    type="text"
                                ></input>
                            </div>
                            {/* precios X libra */}
                            <div className="col-sm-2">
                                <label>precios x libra</label>
                                <input
                                    className="form-control"
                                    placeholder="precio delingrediente" 
                                    aria-label="precio delingrediente"
                                    value={campo.precioI}
                                    onChange={(e) =>handleChange( e.target.value)}
                                    type="number"
                                ></input>
                            </div>
                            <button className="boton-flotante" onClick={() => eliminarCampo(campo.id)}>➖</button>
                        </div>
                        ))}
                        <a className="boton-flotante" onClick={agregarCampo}>➕</a>
                        <div className="col-12">
                            <button className="btn" type="submit">enviar</button>
                            <Link className="btn" aria-current="page" to="/VerMen">cancelar</Link>
                        </div>
                    </table>
                </form>
                </div>
            </div>
        </div>
    </div>  
    </>
    );
};
export default FormularioDinamico;