import React,{ useState } from "react";
import {signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from '../../Fire/meFire';
import { Link } from "react-router-dom";

const Login = () => {
    const [user,setUser] = useState('');
    const [pass,setPass] = useState('');
    const navigate = useNavigate();
    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,user,pass)
        .then((useCredential)=>{
            console.log(useCredential);
            navigate('/VerMen')
        }).catch((error)=>{
            console.log(error);
        })
    }
    return(
        <>
        <div className="row justify-content-md-center">
            <div className="card">
                <div className="form-floating mb-3">
            <form className="row g-3 needs-validation" onSubmit={signIn}>
                <h1>loguin</h1>
                <div className="mb-3">
                    <input 
                    className="form-control"
                    type="email" 
                    placeholder="usuario" 
                    value={user}
                    onChange={(e)=>setUser(e.target.value)}
                    ></input>
                </div>
                <div className="mb-3">
                    <input 
                    className="form-control"
                    type="password" 
                    placeholder="contraceña" 
                    value={pass}
                    onChange={(e)=>setPass(e.target.value)}
                    ></input>
                </div>
                <button className="btn btn-primary" type="submit">iniciar</button>
            </form>
            <Link to='/SingUp'>registrarse</Link>
        </div>
        </div>
        </div>
        </>
    )
} 
export default Login;