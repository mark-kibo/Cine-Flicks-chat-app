import React, { useState } from 'react'
import { Button, TextInput, Label } from 'flowbite-react';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';
import ErrorComponent from './Error';

const Register = () => {
    const {handleSignInClick, loading, setLoading,  signin, error} = useAuth()
    const[username, setUsername]= useState()
    const[password, setPassword]= useState()
    const[email, setEmail]= useState()
    const handleSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault()

        const res= await signin(username, email, password)
        console.log(res)
        setLoading(false)
    }
  return (
    <form onSubmit={(e)=>{handleSubmit(e)}}>

         <div className="space-y-6">
            {error.message && ( <ErrorComponent message={error.message}/>)}
           
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="username" value="Your username" />
              </div>
              <TextInput onChange={(e)=>{
                  setUsername(e.target.value)
              }}   id="username"  placeholder="kibom" type="text" required color="success" helperText={
                <>
                  <span className="font-medium">Alright!</span> Username available!
                </>
              } />
           
            </div>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput onChange={(e)=>{
                  setEmail(e.target.value)
              }} id="email"  placeholder="johndoe@gmail.com" type="email" required helperText={
                <>
                  <span className="font-medium">Alright!</span> Username available!
                </>
              }/>
           
            </div>
            <div>
              <div className="mb-1 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput onChange={(e)=>{
                  setPassword(e.target.value)
              }} id="password" type="password" required />
            </div>
            <div className="flex justify-between">

              <Link to="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </Link>
            </div>
            <div className="w-full">
              <Button className='w-full' type='submit' disabled={loading && "true"}>{loading ? 'loading ...':"Sign up"}</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Already have an account?&nbsp;
              <Link className="text-cyan-700 hover:underline dark:text-cyan-500" onClick={()=>{
                handleSignInClick()
              }}>
                Login
              </Link>
            </div>
            </div>
            </form>
    
    
  )
}

export default Register