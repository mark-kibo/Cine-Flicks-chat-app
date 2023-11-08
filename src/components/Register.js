import React, { useState } from 'react'
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useAuth } from '../AuthContext';

const Register = () => {
    const {handleSignInClick, loading, setLoading, login} = useAuth()
    const[username, setUsername]= useState()
    const[password, setPassword]= useState()
    const handleSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault()

        const res= await login()
        console.log(res)
        setLoading(false)
    }
  return (
         <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your username" />
              </div>
              <TextInput id="username"  placeholder="kibom" type="text" required />
           
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            <div className="flex justify-between">

              <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button className='w-full'>Sign up</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account?&nbsp;
              <a className="text-cyan-700 hover:underline dark:text-cyan-500" onClick={()=>{
                handleSignInClick()
              }}>
                Login
              </a>
            </div>
            </div>
    
    
  )
}

export default Register