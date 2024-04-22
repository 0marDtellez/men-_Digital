import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth } from "../../Fire/meFire";

const AuthDetails =()=>{
    const [authUser,setAuthUser] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user)=>{
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        });
        return ()=>{
            listen();
        }
    },[]);
    const userSignOut = () => {
        signOut(auth).then(()=>{
            console.log('sing out successfull')
            navigate('/login')
        }).catch(error => console.log(error));
    }
    return(
        <>
        <div>
            {authUser ? <><p>{`signed in as ${authUser.email}`}</p><button onClick={userSignOut}>Sing Up</button></>:<p>signed Out</p>}
        </div>
        </>
    )
}
export default AuthDetails;