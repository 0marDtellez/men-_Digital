import {Link} from "react-router-dom";
import '../css/index.css';
import '../css/home.css'
import { datIma } from "../../imagen/data";
import React,{ useEffect, useRef, useState } from "react";

const  Home=()=>{
    const listRef =useRef();
    const [currentIndex,setCurrentIndex] = useState(0);
    useEffect(()=>{
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];
        if(imgNode){
            imgNode.scrollIntoView({
                behavior:"smooth"
            })
        }
    },[currentIndex])
    const scrollToImagee = (direction) => {
        if(direction === 'prev'){
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            })
        } else {
            const isLastSlide = currentIndex === datIma.length - 1;
            if (!isLastSlide){
                setCurrentIndex(curr => curr + 1)
            }
        }
    }
    return(
        <>
        <div className="container">
            <div className="colorf">
                <nav  aria-label="navbar navbar-expand-lg bg-body-tertiary">
                    <ol class="breadcrumb">
                        <img className="tamaño" src="https://ih0.redbubble.net/image.1812649502.0160/raf,360x360,075,t,fafafa:ca443f4786.jpg"/>
                        <h1 className="home">Baratie</h1>
                    </ol>
                </nav>
            </div>
            <div className="home">
                <div className="container text-center">
                    <div className="main-container">
                        <div className="slider-container">
                            <div 
                                className="leftArrow"
                                onClick={()=>scrollToImagee('prev')}
                            >&#10092;</div>
                            <div 
                                className="rightArrow"
                                onClick={()=>scrollToImagee('next')}
                            >&#10093;</div>
                            <div className="container-images">
                                <ul ref ={listRef}>
                                    {datIma.map((item) => {
                                        return(
                                            <li key={item.id}>
                                                <img
                                                    src={ item.imagen}
                                                    width={500}
                                                    height={280}
                                                />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link className="page-link" to="/platos">informacion</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home;