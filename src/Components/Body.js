import React from 'react';

export default function Body(){

    const textoDecorativo={
        color:'#00f',
        fontSize:'3em'
    }
    return(
       <section>
           <h2 style={{color:'#0f0',fontSize:'5em'}}>Naturopatia !!</h2>
           <p style={textoDecorativo}>Venha curtir a natureza e recarregar as baterias!!!</p>
       </section> 
    )
}