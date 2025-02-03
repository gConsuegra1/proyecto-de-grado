import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate(); // Initialize navigate

  // Get logged-in user information
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('carrito'); // Optionally clear cart data if needed
    
    // Redirect to login page after successful logout
    navigate('/Login');
  };

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>
      <ul className='hidden sm:flex gap-5 text-sm'>
        <NavLink
          to='/'
          className='nav-link flex flex-col items-center gap-1'
          activeclassname='active'
        >
          <p>INICIO</p>
          <hr className='underline' />
        </NavLink>
        <NavLink
          to='/collection'
          className='nav-link flex flex-col items-center gap-1'
          activeclassname='active'
        >
          <p>COLECCIÓN</p>
          <hr className='underline' />
        </NavLink>
        <NavLink
          to='/about'
          className='nav-link flex flex-col items-center gap-1'
          activeclassname='active'
        >
          <p>ACERCA</p>
          <hr className='underline' />
        </NavLink>
        <NavLink
          to='/contact'
          className='nav-link flex flex-col items-center gap-1'
          activeclassname='active'
        >
          <p>CONTACTO</p>
          <hr className='underline' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-6'>
        <FontAwesomeIcon onClick={() => setShowSearch(true)} icon={faMagnifyingGlass} className='icon w-5 cursor-pointer' />

        <div className='group relative'>
          {loggedInUser ? (
            <div className='flex items-center gap-2'>
              {/* Display user icon and name */}
              <FontAwesomeIcon icon={faUser} className='icon w-5 cursor-pointer' />
              <p className='text-[#1f3a93] font-medium'>{loggedInUser.name}</p>

              {/* Dropdown visible on hover */}
              <div className='absolute right-0 pt-4 group-hover:block hidden'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-custom-blue rounded'>
                  
                  <p onClick={handleLogout} className='cursor-pointer hover:text-[#e9c01e]'>Cerrar Sesión</p>
                </div>
              </div>
            </div>
          ) : (
            <FontAwesomeIcon 
              onClick={() => navigate('/Login')} 
              icon={faUser} 
              className='icon w-5 cursor-pointer' 
            />
          )}
        </div>

        <Link to='/cart' className='relative'>
          <FontAwesomeIcon icon={faCartShopping} className='icon w-5 min-w-5' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#e9c01e] text-[##1f3a93] aspect-square rounded-full text-[10px]'>{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
      </div>

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        {visible && (
          <div className='flex flex-col text-[#1f3a93]'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img src={assets.dropdown_icon} className='icon h-4 rotate-180' />
              <p>Regresar</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>INICIO</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLECCIÓN</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ACERCA</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACTO</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
