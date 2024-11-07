import React, { useState } from 'react'
import axios from 'axios'

const Register = ({openLogin}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [file,setFile] = useState(null)
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('username',username)
        formData.append('password',password)
        formData.append('image',file)
        try {
          const response = await axios.post('http://localhost:3000/chat/user/register', formData);
          console.log (response)
          if(response.data.msg === "success"){
            openLogin()
          }
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4 text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div className='mb-4'>
           <label className='block text-gray-700' htmlFor="name">Username</label>
           <input className='w-full px-3 py-2 border rounded' type="text" 
           onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username' />
        </div>
        <div className='mb-4'>
           <label className='block text-gray-700' htmlFor="password">Password</label>
           <input className='w-full px-3 py-2 border rounded' type="password"
            onChange={(e)=>setPassword(e.target.value)} placeholder='*********' />
        </div>
        <div>
            <label className='block text-gray-700'>Profile Image</label>
            <input 
            type="file" 
            onChange={(e)=>setFile(e.target.files[0])}
            className='border rounded mb-4 p-2 bloack w-full text-sm text-gray-500 
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0 file:text-sm 
            file:font-semibold file:bg-blue-500 
            file:text-white hover:file:bg-blue-700'/>
        </div>
       
        <div className='mb-4'>
             <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700'>Sign Up</button>
        </div>
       

        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Already Have an Account ?</span>
            <button  className='text-blue-500'onClick={openLogin} >Login</button>
        </div>
    </div>
  )
}

export default Register
