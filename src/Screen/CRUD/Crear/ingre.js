import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { collection,addDoc } from "firebase/firestore";
import { data } from "../../../Fire/meFire";
import {Link} from "react-router-dom"
// import '../css/stilo.css'

const Ingredien = () => {
    //datos
    const [ ingre1,setIngre1] = useState("");
    const [ preIng1,setPreIng1] = useState(0);
    const [ ingre2,setIngre2] = useState("");
    const [ preIng2,setPreIng2] = useState(0);
    const [ ingre3,setIngre3] = useState("");
    const [ preIng3,setPreIng3] = useState(0);
    const [ ingre4,setIngre4] = useState("");
    const [ preIng4,setPreIng4] = useState(0);
    const [ ingre5,setIngre5] = useState("");
    const [ preIng5,setPreIng5] = useState(0);
    const [ ingre6,setIngre6] = useState("");
    const [ preIng6,setPreIng6] = useState(0);
    const [ ingre7,setIngre7] = useState("");
    const [ preIng7,setPreIng7] = useState(0);
    //navegacin 
    const navigate = useNavigate();
    const menuCollection = collection (data,"menu");
    
    const store = async (e) => {
        e.preventDefault()
        await addDoc( 
            menuCollection,{
                ingre1:ingre1,preIng1:preIng1,
                ingre2:ingre2,preIng2:preIng2,
                ingre3:ingre3,preIng3:preIng3,
                ingre4:ingre4,preIng4:preIng4,
                ingre5:ingre5,preIng5:preIng5,
                ingre6:ingre6,preIng6:preIng6,
                ingre7:ingre7,preIng7:preIng7,
            })
        navigate('/VerMen')
    }
    const presto =() =>{
        return((prod)=>
        prod.ingre1+prod.ingre2+prod.ingre3+prod.ingre4+prod.ingre5+prod.ingre6+prod.ingre7,0);
      }
    return(
    <>
    <div className="form-floating mb-3">
        <form className="row g-3 needs-validation" onSubmit={store}>
        <div>
        <label>Precio del alimento</label>
        <h2>precio total: {}</h2>
        </div>
            <h1>ingredientes</h1>
            <div>
                <div className="row gx-3 gy-2 align-items-center">
                    <div className="col-sm-7">
                    <label>Ingredientes del alimento</label>
                        <input
                            className="form-control"
                            placeholder="Ingrediente numero uno" 
                            aria-label="Ingrediente numero uno"
                            value={ingre1}
                            onChange={(e) =>setIngre1(e.target.value)}
                            type="text" 
                        ></input>
                    </div>
                    {/* precios */}
                    <div className="col-sm-3">
                    <label>precios</label>
                        <input
                            className="form-control"
                            placeholder="precio delingrediente" 
                            aria-label="precio delingrediente "
                            value={preIng1}
                            onChange={(e) =>setPreIng1(e.target.value)}
                            type="number" 
                        ></input>
                    </div>
                </div>
                <br/>
                <div className="row gx-3 gy-2 align-items-center">
                    <div className="col-sm-7">
                        <input
                            className="form-control"
                            placeholder="Ingrediente numero uno" 
                            aria-label="Ingrediente numero uno"
                            value={ingre2}
                            onChange={(e) =>setIngre2(e.target.value)}
                            type="text" 
                        ></input>
                    </div>
                    {/* precios */}
                    <div className="col-sm-3">
                        <input
                            className="form-control"
                            placeholder="precio delingrediente" 
                            aria-label="precio delingrediente "
                            value={preIng2}
                            onChange={(e) =>setPreIng2(e.target.value)}
                            type="number" 
                        ></input>
                    </div>
                </div>
                <br/>
                <div className="row gx-3 gy-2 align-items-center">
                    <div className="col-sm-7">
                        <input
                            className="form-control"
                            placeholder="Ingrediente numero uno" 
                            aria-label="Ingrediente numero uno"
                            value={ingre3}
                            onChange={(e) =>setIngre3(e.target.value)}
                            type="text" 
                        ></input>
                    </div>
                    {/* precios */}
                    <div className="col-sm-3">
                        <input
                            className="form-control"
                            placeholder="precio delingrediente" 
                            aria-label="precio delingrediente "
                            value={preIng3}
                            onChange={(e) =>setPreIng3(e.target.value)}
                            type="number" 
                        ></input>
                    </div>
                </div>
                <br/>
                <div className="row gx-3 gy-2 align-items-center">
                    <div className="col-sm-7">
                        <input
                            className="form-control"
                            placeholder="Ingrediente numero uno" 
                            aria-label="Ingrediente numero uno"
                            value={ingre4}
                            onChange={(e) =>setIngre4(e.target.value)}
                            type="text" 
                        ></input>
                    </div>
                    {/* precios */}
                    <div className="col-sm-3">
                        <input
                            className="form-control"
                            placeholder="precio delingrediente" 
                            aria-label="precio delingrediente "
                            value={preIng4}
                            onChange={(e) =>setPreIng4(e.target.value)}
                            type="number" 
                        ></input>
                    </div>
                </div>
                <br/>
                <div className="row gx-3 gy-2 align-items-center">
                    <div className="col-sm-7">
                        <input
                            className="form-control"
                            placeholder="Ingrediente numero uno" 
                            aria-label="Ingrediente numero uno"
                            value={ingre5}
                            onChange={(e) =>setIngre5(e.target.value)}
                            type="text" 
                        ></input>
                    </div>
                    {/* precios */}
                    <div className="col-sm-3">
                        <input
                            className="form-control"
                            placeholder="precio delingrediente" 
                            aria-label="precio delingrediente "
                            value={preIng5}
                            onChange={(e) =>setPreIng5(e.target.value)}
                            type="number" 
                        ></input>
                    </div>
                </div>
                <br/>
                <div className="row gx-3 gy-2 align-items-center">
                    <div className="col-sm-7">
                        <input
                            className="form-control"
                            placeholder="Ingrediente numero uno" 
                            aria-label="Ingrediente numero uno"
                            value={ingre6}
                            onChange={(e) =>setIngre6(e.target.value)}
                            type="text" 
                        ></input>
                    </div>
                    {/* precios */}
                    <div className="col-sm-3">
                        <input
                            className="form-control"
                            placeholder="precio delingrediente" 
                            aria-label="precio delingrediente "
                            value={preIng6}
                            onChange={(e) =>setPreIng6(e.target.value)}
                            type="number" 
                        ></input>
                    </div>
                </div>
                <br/>
                <div className="row gx-3 gy-2 align-items-center">
                    <div className="col-sm-7">
                        <input
                            className="form-control"
                            placeholder="Ingrediente numero uno" 
                            aria-label="Ingrediente numero uno"
                            value={ingre7}
                            onChange={(e) =>setIngre7(e.target.value)}
                            type="text" 
                        ></input>
                    </div>
                    {/* precios */}
                    <div className="col-sm-3">
                        <input
                            className="form-control"
                            placeholder="precio delingrediente" 
                            aria-label="precio delingrediente "
                            value={preIng7}
                            onChange={(e) =>setPreIng7(e.target.value)}
                            type="number" 
                        ></input>
                    </div>
                </div>
            </div>
        </form>
    </div>
    </>
    );
};
export default Ingredien;