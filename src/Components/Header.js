import React from "react";
import Logotipo from './Imgs/Logotipo.png'

export default function Header(){
    return(
        <header>
            <img src={Logotipo}/>
            <h1 className="texto">Onde você se conecta com a natureza!!</h1> 

        </header>
    )
}