import React from 'react'
import { IMG_CDN_URL } from './constant'

const FoodItem = ({ name,  price, imageId
}) => {

  return (
    <div className='w-64 m-5 bg-white p-1'>
       <div className='p-2 m-2'> 
        {!imageId ? <img src = "https://www.freeiconspng.com/img/23485"/> :<img src={IMG_CDN_URL + imageId}/>}
        <h3 className='font-medium text-sm pb-1 pt-3'>{name}</h3>
        <h4 className='text-sm font-normal'>{String(price / 100)}</h4></div>
    </div> 
  )
}

export default FoodItem;