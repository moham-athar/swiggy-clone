
import React from 'react'
import UserContext from '../utils/UserContext'
import { useContext, useState} from 'react'

const Profile = () => {

  const {user, setUser } = useContext(UserContext);
  const [value, setValue] = useState()

  return (
    
    <div className='flex justify-center items-center flex-col'>
      <input 
        type ="text"
        className='border border-black  m-3 p-3 rounded-lg'
        placeholder='enter your name'
        value = {value}
        onChange = { (e) => setValue(e.target.value)}
      />
      <button 
      className='m-2 p-2 rounded-md bg-black text-white'
      onClick = {() => setUser({name:value})} >
        Click!
      </button>
      </div>
  )
}

export default Profile