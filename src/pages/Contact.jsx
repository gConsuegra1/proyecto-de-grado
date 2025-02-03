import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'PONTE EN'} text2={'CONTACTO'} />
      </div>

      {/* Image & Details Section - Larger Image */}
      <div className='my-2 flex flex-col md:flex-row items-center justify-center gap-10 mb-28 max-w-5xl mx-auto'>
        <img src={assets.contact_img} alt="Contacto" className="w-[400px]  md:w-[470px] lg:w-[700px] h-auto rounded-lg shadow-md" />
        <div className='flex flex-col gap-4 text-gray-600 text-lg '>
          <p><strong>Dirección:</strong> Guayaquil, Av. del Bombero. <br /> Al lado del Seminario Mayor de Guayaquil</p>
          <p className='text-gray-500'><strong>Tel:</strong> (099) 116-8710</p>
          <p className='text-gray-500'><strong>Correo:</strong> bernardino@cbecheverria.edu.ec</p>
        </div>
      </div>

      {/* Contact Form & Google Maps Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-6 bg-white  rounded-lg">
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <div className='text-2xl mb-3'>
            <Title text1={'MANDA UN'} text2={'MENSAJE'} />
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nombre"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Correo electrónico"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Mensaje"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-[#1f3a93] text-white font-semibold rounded-md hover:bg-[#e9c01e] cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Envíar Mensaje
              </button>
            </div>
          </form>
        </div>

        {/* Google Maps Section */}
        <div className="w-full md:w-1/2">
          <iframe
            className="w-full h-full min-h-[300px] rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.961361701316!2d-79.93681642416713!3d-2.1683978372282593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d726cedc8f755%3A0x3dbac00c7da4cff5!2sUnidad%20Educativa%20Cardenal%20Bernardino%20Echeverr%C3%ADa%20Ruiz!5e0!3m2!1ses!2sec!4v1738554329878!5m2!1ses!2sec"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;
