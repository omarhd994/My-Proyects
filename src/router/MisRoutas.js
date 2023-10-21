import React from 'react'
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Contacto } from '../components/Contacto';
import { CV } from '../components/CV';
import { Servicios } from '../components/Servicios';
import { Portafolio } from '../components/Portafolio';
import { Inicio } from '../components/Inicio';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';



export const MisRoutas = () => {
     
  return (
     <BrowserRouter>
     {/* HEADER Y NAVEGACION */}
      <HeaderNav/>

     {/* CONTENIDO CENTRAL */}
     <section className='content'>
         <Routes>
               <Route path='/' element={<Navigate to="/Inicio"/>}/>
               <Route path='/inicio' element={<Inicio/>}/>
               <Route path='/portafolio' element={<Portafolio/>}/>
               <Route path='/servicios' element={<Servicios/>}/>
               <Route path='/cv' element={<CV/>}/>
               <Route path='/contacto' element={<Contacto/>}/>
         </Routes>
     </section>
     
     {/* FOOTER */}
      <hr/>
      <Footer/>
     </BrowserRouter>
    
  )
}
