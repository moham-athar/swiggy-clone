import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap'>
        {Array(10).fill("").map((e, index) => (
            <div className='m-9 w-56 h-72  shadow-lg flex flex-col bg-red-200 rounded-lg' key={index}></div>
        ))}
    </div>
  )
}

export default Shimmer