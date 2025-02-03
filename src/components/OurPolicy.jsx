import React from 'react'
import { assets } from '../assets/assets'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 text-center py-20 text-xs sm:text-sm md:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-bold text-[#1f3a93]'>El mejor servicio de atención al cliente.</p>
        <p className='text-[#1f3a93]'>Brindamos atención al cliente los 7 días de la semana.</p>
      </div>
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-bold text-[#1f3a93]'>Política de devolución de 7 días</p>
        <p className='text-[#1f3a93]'>Ofrecemos una política de devolución gratuita de 7 días.</p>
      </div>
    </div>
  )
}

export default OurPolicy
