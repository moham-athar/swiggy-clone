import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import useOnline from '../utils/useOnline';
import { useSelector } from 'react-redux';
import { useContext } from 'react'; 
import UserContext from '../utils/UserContext';

const Header = () => {

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  const isOnline = useOnline()

const cartItems = useSelector(store => store.cart.items)
console.log(cartItems)

const { user }  = useContext(UserContext);

    return (
      <div className='ml-12 mr-12 '>
      <nav className='flex justify-between  bg-white p-2'>
       
        <div className='pl-10 m-1'>
        <Link to = "/">
        <img 
        className='w-6 h-10'
        src='https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png' alt = "swiggy-logo"/>
        </Link>
        </div>
      
  
        <ul className='flex space-x-16 pt-4'>

          <li> 
            <Link to = "/profile">
              {user.name}
            </Link>
            </li>
          
          <li>
          <Link to = "/contact">
          Contact
          </Link>
          </li>
          <li>
          <Link to = "/cart">
          Cart- {cartItems.length} 
          </Link>
          </li>
        </ul>
        {/* {
        isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}> Logout</button> : <button onClick={()=> setIsLoggedIn(true)}>LogIn</button>
        } */}
        
      </nav>
      </div>
    )
  }
  
  
export default Header