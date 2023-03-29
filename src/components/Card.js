import React from 'react'
import { IMG_CDN_URL } from './constant'


const Card = ({name, cuisines, cloudinaryImageId, lastMileTravelString, costForTwoString, slaString, avgRating }) => {
    return (
      <div className='bg-white mr-5 ml-20 hover:border-gray-500'>
      <div className="w-64 p-1 m-1 ">
          <img className='w-60 h-40' src=  {IMG_CDN_URL + cloudinaryImageId}/>
          <h2 className='font-medium text-left pb-2'>{name}</h2>
          <h3 className=' text-sm font-extralight text-left pb-4'>{cuisines.join(", ")}</h3>
          <span className="text-xs  flex justify-between pb-2">
            <div className='bg-orange-400 text-white h-5 w-10'> ⭐ {avgRating }
            </div>
            <div>{slaString} </div>
            <div>{costForTwoString}</div>
            </span>
      </div>
      </div>
    )
  }
export default Card