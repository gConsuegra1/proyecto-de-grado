import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>

        <Title text1={'ACERCA DE'} text2={'NOSOTROS'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>

        <img className='w-full object-cover md:max-w-[450px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Somos un equipo de estudiantes comprometidos, conformado por
            Giancarlos Consuegra y Matheo Morante , de tercer
            curso de Bachillerato Informática B. </p>
          <p>Este proyecto nació como respuesta a cuales
            necesidades actuales de nuestra institución educativa. Al
            reflexionar sobre estas necesidades, identificamos la
            importancia de ofrecer una solución práctica y eficiente para
            los uniformes escolares. .</p>

          <b className='text-gray-800'>Nuestra Misión</b>
          <p>Motivados por el deseo de contribuir
            positivamente a nuestra comunidad estudiantil, decidimos crear
            esta página como una herramienta para facilitar la adquisición
            de uniformes, ahorrando tiempo y brindando comodidad a
            estudiantes y padres.</p>

        </div>
      </div>
      <div className=' text-3xl py-4'>

        <Title text1={'¿POR QUÉ'} text2={'ES ÚTIL LA PÁGINA?'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className=' border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Comodidad y Ahorro de Tiempo</b>
          <p className='text-gray-600'>Los padres y estudiantes pueden comprar los uniformes escolares desde la comodidad de su hogar, evitando la necesidad de desplazarse a las tiendas físicas y reduciendo el tiempo que normalmente se gastaría en buscar las prendas adecuadas.</p>
        </div>
        <div className='border border-gray-200  px-10 md:px-16 py-8 sm:py-20 flex-col gap-5'>
          <b>Acceso centralizado a productos exclusivos</b>
          <p className='text-gray-600'>La página puede ofrecer solo los uniformes oficiales del colegio, asegurando que los padres adquieran los artículos correctos y conforme a las normativas del centro educativo, evitando confusión con productos no autorizados.</p>
        </div>
        <div className='border border-gray-200  px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Mejor gestión de inventarios y precios</b>
          <p className='text-gray-600'>La página eCommerce permitirá al colegio gestionar de manera eficiente el inventario, ofrecer descuentos especiales, o establecer precios claros y accesibles, asegurando que los uniformes estén siempre disponibles cuando los necesiten los padres.</p>
        </div>

      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default About
