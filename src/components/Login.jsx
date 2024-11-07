import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Login = ({openSignup}) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:3000/chat/user/login', {username,password});
          console.log (response)
          if(response.data.msg === "success"){

            window.localStorage.setItem('chat-token', response.data.token)
            window.localStorage.setItem('userId', response.data.user._id)
            navigate('/chat')
          }
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
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
        <div className='mb-4 flex items-center justify-between'>
           <label className='inline-flex items-center' htmlFor="rememberme">
             <input type="checkbox" className='form-checkbox' />
             <span className='ml-2 text-gray-700 '>Remember Me</span>
           </label>
           <a href="" className='text-red-500'>Forgot Password</a>
           
        </div>
        <div className='mb-4'>
             <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700'>Login</button>
        </div>
       

        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Don't Have an Account ?</span>
            <button  className='text-blue-500'onClick={openSignup} >Sign Up</button>
        </div>
    </div>
  )
}

export default Login
