import React from 'react';
import Relogio from './Components/Relogio';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

export default function App() {
  return (
    <section className='caixa'>
        <Relogio/>
        <Header/>
        <Body/>
        <a href='https://sitiolerefugepenedo.com.br' target='_blank'>Le Refuge</a>
    </section>
  );
}


