import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useAuth } from '../AuthContext';
import ErrorComponent from './Error';
import { Link } from 'react-router-dom';

const Login = () => {
    const {handleSignInClick, loading, setLoading, login, error} = useAuth()
    const[username, setUsername]= useState()
    const[password, setPassword]= useState()
    const handleSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault()

        await login(username, password)
        setLoading(false)
    }
 
  return (
    
    <form method='post' onSubmit={(e)=>handleSubmit(e)}>
         <div className="space-y-6">
         {error.message  && ( <ErrorComponent message={error.message}/>)}
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
               
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your username" />
              </div>
              <TextInput
                id="username"
                placeholder="name@company.com"
             
             
                required
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput  onChange={(e)=>{
                    setPassword(e.target.value)
                }} id="password" type="password" required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Link to="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </Link>
            </div>
            <div className="w-full">
              <Button  className='w-full' type='submit'>{loading ? "loading.....":"Log in to your account"}</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <Link  to="" className="text-cyan-700 hover:underline dark:text-cyan-500" onClick={()=>{
                handleSignInClick()
              }}>
                Create account
              </Link>
            </div>
         
            </div>
        

        </form>
    
    
  )
}

export default Login