import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { collection,addDoc } from "firebase/firestore";
import { data } from "../../../Fire/meFire";
import {Link} from "react-router-dom"
import '../../css/index.css'

const Entradas = () => {
    //Alertas
    const handleCrear=()=>{
        const confirmacion = window.confirm('¿Estas seguro/a de Crear el producto');
        if (confirmacion) {
          alert('Has Creado el Producto.');
        }
      }
    //datos
    const [ catego,setCatego] = useState("");
    const [ imagen,setImagen] = useState("");
    const [ Nombre,setNombre] = useState("");
    const [ Precio,setPrecio] = useState("");
    const [ Descri,setDescri] = useState("");
    // ifoIngredientes
    // ifoIngredientes
    const [ canti1,setCanti1] = useState("");
    const [ peso1,setPeso1] = useState("");
    const [ ingre1,setIngre1] = useState("");
    const [ preIng1,setPreIng1] = useState("");
    //2
    const [ peso2,setPeso2] = useState("");
    const [ canti2,setCanti2] = useState("");
    const [ ingre2,setIngre2] = useState("");
    const [ preIng2,setPreIng2] = useState("");
    //3
    const [ peso3,setPeso3] = useState("");
    const [ canti3,setCanti3] = useState("");
    const [ ingre3,setIngre3] = useState("");
    const [ preIng3,setPreIng3] = useState("");
    //
    const [ peso4,setPeso4] = useState("");
    const [ canti4,setCanti4] = useState("");
    const [ ingre4,setIngre4] = useState("");
    const [ preIng4,setPreIng4] = useState("");
    //
    const [ peso5,setPeso5] = useState("");
    const [ canti5,setCanti5] = useState("");
    const [ ingre5,setIngre5] = useState("");
    const [ preIng5,setPreIng5] = useState("");
    //
    const [ peso6,setPeso6] = useState("");
    const [ canti6,setCanti6] = useState("");
    const [ ingre6,setIngre6] = useState("");
    const [ preIng6,setPreIng6] = useState("");
    //
    const [ peso7,setPeso7] = useState("");
    const [ canti7,setCanti7] = useState("");
    const [ ingre7,setIngre7] = useState("");
    const [ preIng7,setPreIng7] = useState("");
    //
    const [ peso8,setPeso8] = useState("");
    const [ canti8,setCanti8] = useState("");
    const [ ingre8,setIngre8] = useState("");
    const [ preIng8,setPreIng8] = useState("");
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
        {cantidad:canti1,nombre:ingre1,peso:peso1,precio:preIng1},
        {cantidad:canti2,nombre:ingre2,peso:peso2,precio:preIng2},
        {cantidad:canti3,nombre:ingre3,peso:peso3,precio:preIng3},
        {cantidad:canti4,nombre:ingre4,peso:peso4,precio:preIng4},
        {cantidad:canti5,nombre:ingre5,peso:peso5,precio:preIng5},
        {cantidad:canti6,nombre:ingre6,peso:peso6,precio:preIng6},
        {cantidad:canti7,nombre:ingre7,peso:peso7,precio:preIng7},
        {cantidad:canti8,nombre:ingre8,peso:peso8,precio:preIng8}
    ]
    //navegacin 
    const navigate = useNavigate();
    const menuCollection = collection (data,"entradas");
    const store = async (e) => {
        e.preventDefault()
        await addDoc( 
            menuCollection,{
                catego:catego,imagen:imagen,Nombre:Nombre,Precio:Precio,
                Descri:Descri,ingredPrinip:IngrePrinsi,IngredientesPrincipales:IngForm
            })
        navigate('/VerMen')
    }
    //formulari
    return(
    <>
    <br/>
    <div className="row justify-content-md-center">
        <div className="container">
            <div className="h">
                <div>
                    <h1>Crea una entrada </h1>
                </div>
                <br/>
                <div className="form-floating mb-3">
                <form className="row g-3 needs-validation" onSubmit={store}>
                    <table className="tablas">
                        <h3>informacion basica del producto</h3>
                        <div className="col-sm-11">
                            <h4>Categoria del plato</h4>
                            <select
                                class="form-select form-select-lg mb-1"
                                aria-label="Large select example"
                                value={catego}
                                required
                                onChange={(e) =>setCatego(e.target.value)}>
                                <option></option>
                                <option>Entradas_frías</option>
                                <option>Entradas_calientes</option>
                            </select>
                        </div>
                        <div className="col-sm-11">
                            <label>Imagen del plato</label>
                            <input
                                className="form-control"
                                value={imagen}
                                required
                                onChange={(e) =>setImagen(e.target.value) }
                                type="text"
                            ></input>
                        </div>
                        <div className="col-sm-11">
                            <label>Nombre del alimento</label>
                            <input
                                className="form-control" 
                                placeholder="Nombre del alimento" 
                                aria-label="Nombre del alimento"
                                value={Nombre}
                                required
                                onChange={(e) =>setNombre(e.target.value)}
                                type="text"
                            ></input>
                        </div>
                        <div className="col-sm-11">
                            <label>Brebe descripcion</label>
                            <input
                                className="form-control"
                                value={Descri}
                                required
                                onChange={(e) =>setDescri(e.target.value)}
                                type="text"
                            ></input>
                        </div>
                        <div className="col-sm-11">
                            <label>Precio del alimento</label>
                            <input
                                className="form-control"
                                value={Precio}
                                required
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
                                <option></option>
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
                                <option></option>
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
                                <option></option>
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
                        <div>
                            <div className="row gx-3 gy-2 align-items-center">
                                <div className="col-sm-2">
                                    <label>Cantidad.</label>
                                    <input
                                        className="form-control"
                                        placeholder="Cantidad" 
                                        aria-label="Cantidad"
                                        value={canti1}
                                        onChange={(e) =>setCanti1(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                <div className="col-sm-2">
                                <label>Peso </label>
                                    <select
                                        class="form-select form-select-sm"
                                        aria-label="Large select example"
                                        value={peso1} 
                                        onChange={(e) =>setPeso1(e.target.value)}>
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
                                        value={ingre1}
                                        onChange={(e) =>setIngre1(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                    {/* precios X libra */}
                                <div className="col-sm-2">
                                    <label>precios x libra</label>
                                    <input
                                        className="form-control"
                                        value={preIng1}
                                        onChange={(e) =>setPreIng1(e.target.value)}
                                        type="number" 
                                    ></input>
                                </div>
                            </div>
                            {/* ingrediente2 */}
                            <br/>
                            <div className="row gx-3 gy-2 align-items-center">
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={canti2}
                                        onChange={(e) =>setCanti2(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                <div className="col-sm-2">
                                    <select
                                        class="form-select form-select-sm"
                                        aria-label="Large select example"
                                        value={peso2} 
                                        onChange={(e) =>setPeso2(e.target.value)}>
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
                                    <input
                                        className="form-control"
                                        value={ingre2}
                                        onChange={(e) =>setIngre2(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                {/* precios */}
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={preIng2}
                                        onChange={(e) =>setPreIng2(e.target.value)}
                                        type="number" 
                                    ></input>
                                </div>
                            </div>
                            {/* ingrediente3 */}
                            <br/>
                            <div className="row gx-3 gy-2 align-items-center">
                            <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={canti3}
                                        onChange={(e) =>setCanti3(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                <div className="col-sm-2">
                                    <select
                                        class="form-select form-select-sm"
                                        aria-label="Large select example"
                                        value={peso3} 
                                        onChange={(e) =>setPeso3(e.target.value)}>
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
                                    <input
                                        className="form-control"
                                        value={ingre3}
                                        onChange={(e) =>setIngre3(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                {/* precios */}
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={preIng3}
                                        onChange={(e) =>setPreIng3(e.target.value)}
                                        type="number" 
                                    ></input>
                                </div>
                            </div>
                            {/* ingrediente4 */}
                            <br/>
                            <div className="row gx-3 gy-2 align-items-center">
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={canti4}
                                        onChange={(e) =>setCanti4(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                <div className="col-sm-2">
                                    <select
                                        class="form-select form-select-sm"
                                        aria-label="Large select example"
                                        value={peso4} 
                                        onChange={(e) =>setPeso4(e.target.value)}>
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
                                    <input
                                        className="form-control"
                                        value={ingre4}
                                        onChange={(e) =>setIngre4(e.target.value)}
                                        type="text"
                                    ></input>
                                </div>
                                {/* precios */}
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                         value={preIng4}
                                        onChange={(e) =>setPreIng4(e.target.value)}
                                        type="number" 
                                    ></input>
                                </div>
                            </div>
                            {/* ingrediente5 */}
                            <br/>
                            <div className="row gx-3 gy-2 align-items-center">
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={canti5}
                                        onChange={(e) =>setCanti5(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                <div className="col-sm-2">
                                    <select
                                        class="form-select form-select-sm"
                                        aria-label="Large select example"
                                        value={peso5} 
                                        onChange={(e) =>setPeso5(e.target.value)}>
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
                                    <input
                                        className="form-control"
                                        value={ingre5}
                                        onChange={(e) =>setIngre5(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                {/* precios */}
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={preIng5}
                                        onChange={(e) =>setPreIng5(e.target.value)}
                                        type="number" 
                                    ></input>
                                </div>
                            </div>
                            {/* ingrediente6 */}
                            <br/>
                            <div className="row gx-3 gy-2 align-items-center">
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={canti6}
                                        onChange={(e) =>setCanti6(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                <div className="col-sm-2">
                                    <select
                                        class="form-select form-select-sm"
                                        aria-label="Large select example"
                                        value={peso6} 
                                        onChange={(e) =>setPeso6(e.target.value)}>
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
                                    <input
                                        className="form-control"
                                        value={ingre6}
                                        onChange={(e) =>setIngre6(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                {/* precios */}
                                <div className="col-sm-2">
                                        <input
                                        className="form-control"
                                        value={preIng6}
                                        onChange={(e) =>setPreIng6(e.target.value)}
                                        type="number" 
                                    ></input>
                                </div>
                            </div>
                            {/* ingrediente7 */}
                            <br/>
                            <div className="row gx-3 gy-2 align-items-center">
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={canti7}
                                        onChange={(e) =>setCanti7(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                <div className="col-sm-2">
                                    <select
                                        class="form-select form-select-sm"
                                        aria-label="Large select example"
                                        value={peso7} 
                                        onChange={(e) =>setPeso7(e.target.value)}>
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
                                    <input
                                        className="form-control"
                                        value={ingre7}
                                        onChange={(e) =>setIngre7(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                {/* precios */}
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={preIng7}
                                        onChange={(e) =>setPreIng7(e.target.value)}
                                        type="number" 
                                    ></input>
                                </div>
                            </div>
                            {/* ingrediente8 */}
                            <br/>
                            <div className="row gx-3 gy-2 align-items-center">
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={canti8}
                                        onChange={(e) =>setCanti8(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                <div className="col-sm-2">
                                    <select
                                        class="form-select form-select-sm"
                                        aria-label="Large select example"
                                        value={peso8} 
                                        onChange={(e) =>setPeso8(e.target.value)}>
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
                                    <input
                                        className="form-control"
                                        value={ingre8}
                                        onChange={(e) =>setIngre8(e.target.value)}
                                        type="text" 
                                    ></input>
                                </div>
                                {/* precios */}
                                <div className="col-sm-2">
                                    <input
                                        className="form-control"
                                        value={preIng8}
                                        onChange={(e) =>setPreIng8(e.target.value)}
                                        type="number" 
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn" type="submit" onClick={()=>{handleCrear()}}>enviar</button>
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
export default Entradas;