import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
           <img src={assets.logo} className='mb-5 w-40 'alt="" /> 
           <p className='w-full md:w-1/3  text-[#1f3a93]'>
           "Uniformes escolares con calidad, comodidad y compromiso para acompañar a tus hijos en cada paso de su educación."
           </p>
        </div>
        
        <div>
            <p className='text-xl font-medium font-bold mb-5 text-[#1f3a93]'>INSTITUTO</p>
           
            <ul className='flex flex-col gap-1 font-bold text-[#e9bb02]'>
                <li>Inicio</li>
                <li>Acerca</li>
                <li>Envío</li>
                <li>Privacidad</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium  mb-5 text-[#1f3a93]'>PONERSE EN CONTACTO</p>
            <ul className='flex flex-col gap-1 font-bold text-[#e9bb02]'>
            <li>+593 099-116-8710</li>
            <li>bernardino@cbecheverria.edu.ec</li>
            </ul>
        </div>
        </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ uniformesbernardino.com - All Rights Reserved.</p>
            </div>
    </div>
  )
}

export default Footer
