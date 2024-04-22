import React,{ useState } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../Fire/meFire'

const SingUp = () => {
    const [user,setUser] = useState('');
    const [pass,setPass] = useState(''); 
    const signIn=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,user,pass)
        .then((useCredential)=>{
            console.log(useCredential);
        }).catch((error)=>{
            console.log(error); 
        })
    }
    return(
        <>
        <div>
            <form onSubmit={signIn}>
                <h1>loguin chebre</h1>
                <input 
                type="emaill" 
                placeholder="usuario" 
                value={user}
                onChange={(e)=>setUser(e.target.value)}
                ></input>
                <input 
                type="password" 
                placeholder="contraceña" 
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
                ></input>
                {/* <input 
                type=""
                placeholder=""
                value={u}
                onChange={(e)}
                ></input> */}
                <button type="submit">iniciar</button>
            </form>
        </div>
        </>
    )
} 
export default SingUp;