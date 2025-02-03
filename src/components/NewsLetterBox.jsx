import React from 'react'

const NewsLetterBox = () => {

    const onSubtmitHandler = (event)  => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-[#1f3a93]'>Suscríbete </p>
      <p className='text-[#e9c01e] mt-3'>
        Recibe mensajes de ofertas especiales.
      </p>
      <form onSubmit={onSubtmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="correo electrónico" placeholder='Ingrese su correo electrónico' required/>
        <button type='submit' className='bg-[#e9c01e] text-[#1f3a93] text-xs px-10 py-4'>Suscribir</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
