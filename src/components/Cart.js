import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import FoodItem from './FoodItem'
import emptyCart from '../assets/empty.png'
import { Link } from 'react-router-dom'
import { removeItem } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems)

  const dispatch = useDispatch();

    const clearCart = () => {
      dispatch(removeItem())
    }

  return (
  <div className='flex justify-center items-center '>
   {cartItems.length == 0 ?  
   ( <div className=' text-center flex flex-col justify-center'>
    <img className='w-5/6 ' src= {emptyCart} alt = "empty"/>
    <Link to="/">
     <div className="w-4/5 bg-orange-600 text-white rounded-md p-2 m-2">SEE RESTAURANTS NEAR YOU</div>
    </Link>
</div>)
: (
  <div className='flex flex-col'>
   <div className='flex flex-wrap m-10 '>
    {cartItems.map(item => <FoodItem key = {item.id} {...item} />)}
    </div>
    <button onClick={() => clearCart()} className='p-2 m-2 bg-orange-500 w-32 rounded-md'>Clear Cart</button>
    </div>
    )
    }
    </div>
  )
}

export default Cart;