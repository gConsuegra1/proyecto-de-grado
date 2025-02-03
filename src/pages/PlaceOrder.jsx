import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sector: '',
    street: '',
    villa: '',
    postalCode: '',
    phoneNumber: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { navigate, cartItems, clearCart } = useContext(ShopContext); // Added clearCart

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Check if there are no products in the cart
    if (Object.keys(cartItems).length === 0) { // Fixed cartItems check
      setErrorMessage('No hay productos en el carrito.');
      setSuccessMessage(''); // Clear success message
      return;
    }

    // Check if any required field is missing
    for (let key in formData) {
      if (formData[key] === '') {
        setErrorMessage('Por favor complete todos los campos.');
        setSuccessMessage(''); // Clear success message
        return;
      }
    }

    // If cart has items and all fields are filled out, show success message
    setErrorMessage(''); // Clear any previous error messages
    setSuccessMessage('Pedido realizado con éxito');

    // Clear the cart after successful order
    clearCart();

    // Redirect to the home page after successful order
    setTimeout(() => {
      navigate('/'); // Navigate to home page after 2 seconds
    }, 2000);
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Lado izquierdo */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'INFORMACIÓN DEL'} text2={'ENVÍO'} />
        </div>

        <div className='flex gap-3'>
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='Nombre'
            required
          />
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Apellido'
            required
          />
        </div>

        <input
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Correo Electrónico'
          required
        />
        <input
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type='text'
          name='sector'
          value={formData.sector}
          onChange={handleChange}
          placeholder='Sector'
          required
        />

        <div className='flex gap-3'>
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='text'
            name='street'
            value={formData.street}
            onChange={handleChange}
            placeholder='Calle principal'
            required
          />
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type='text'
            name='villa'
            value={formData.villa}
            onChange={handleChange}
            placeholder='Manzana y villa'
            required
          />
        </div>

        <input
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type='number'
          name='postalCode'
          value={formData.postalCode}
          onChange={handleChange}
          placeholder='Código Postal'
          required
        />

        <input
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type='number'
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder='Número Celular'
          required
        />
      </div>

      {/* Lado derecho */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80 '>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'MÉTODO DE'} text2={'PAGO'} />
          <div className='flex gap-3 flex-col lg:flex-row justify-between'>
            <div onClick={() => setMethod('bank')} className='flex w-[50%] items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'bank' ? 'bg-green-400' : ''}`}></p>
              <img className='h-16 w-full mx-4 object-cover' src={assets.banco_img} alt='' />
            </div>

            <div onClick={() => setMethod('cod')} className='flex w-[50%] items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='w-full justify-center flex items-center h-16 text-gray-500 text-sm sm:text-xs font-medium mx-4'>
                CON EFECTIVO AL MOMENTO DE ENTREGA
              </p>
            </div>
          </div>

          {/* Show error or success message */}
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}

          <div className='w-full text-end mt-8'>
            <button
              onClick={handleSubmit}
              className='bg-[#1f3a93] text-white my-8 px-8 py-3 text-sm cursor-pointer hover:bg-[#e9c01e]'
            >
              Hacer pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
