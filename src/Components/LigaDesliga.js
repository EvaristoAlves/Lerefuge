import React,{useState} from 'react'
import LedVerde from './Imgs/ledVerde.png'
import LedVermelho from './Imgs/LedVermelho.png'


export default function LigaDesliga(){

    const [ligado,setLigado]=useState(false)

    return(
        <>
            <img style={{width:'50px'}} src={ligado?LedVerde:LedVermelho}/>
            <button onClick={()=>setLigado(!ligado)}>
                {ligado?'Desligar':'Ligar'}
            </button>
        </>
    )
}