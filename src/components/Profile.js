
import React from 'react'
import UserContext from '../utils/UserContext'
import { useContext, useState} from 'react'

const Profile = () => {

  const {user, setUser } = useContext(UserContext);
  const [value, setValue] = useState(user.name)

  return (
    <>
      <input 
        type ="text"
        placeholder='enter your name'
        value = {value}
        onChange = { (e) => setValue(e.target.value)}
      />
      <button onClick = {() => setUser({name:value})} >
        Click!
      </button>
    </>
  )
}

export default Profile