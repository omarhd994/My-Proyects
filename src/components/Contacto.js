import React from 'react'

export const Contacto = () => {
  return (
    <div className='contact'>
    <h1 className='heading'>Contact</h1>

    <form className='contact' action="mailto=haddia94@gmail.com">
      <input type='text' placeholder='Nombre'/>
      <input type='text' placeholder='Apellido'/>
      <input type='text' placeholder='Email'/>
      <textarea placeholder='Motivo de contacto'/>
      <input type='submit' value='Enviar'/>
    </form>
    </div>
  )
}
