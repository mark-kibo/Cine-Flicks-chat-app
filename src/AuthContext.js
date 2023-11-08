// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [signinClicked, setSignInClicked]= useState(false)
  const [user, setUser] = useState(false);
  const[users, setUsers] = useState([])
  const[error, setError] = useState({})
  const[loading , setLoading] = useState(false)
  const navigate = useNavigate()


  const login = async (username, password) => {
    console.log(username, password)
    let response
    try {
    response = await axios.post('https://cineflicks-api.onrender.com/auth/login', { username, password });
      const newToken = response.data.access_token;
      console.log(response.data.access_token)
      setToken(newToken);
      localStorage.setItem('token', newToken);
      navigate("/")
    } catch (error) {
      console.error('Login failed:', error);
      setError({
        message:"Change a few things up and try submitting again."
      })
    }
    return response
  };
  const signin = async (username, email,  password) => {
    let response
    try {
      response = await axios.post('https://cineflicks-api.onrender.com/auth/signUp', { username:username, email:email, password_hash:password });
      if(response.status === 200){
        setSignInClicked(!signinClicked)
      }
      console.log(response)
    } catch (error) {
      console.error('sign up failed:', error);
      setError({
        message:"Change a few things up and try submitting again."
      })
    }
    return response
  };


  const refreshToken = async () => {
    // Implement token refresh logic if needed
    // This function should be called to refresh the token
  };
  function handleSignInClick(){
    console.log("true")
    setSignInClicked(!signinClicked)
  }

  const signout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate("/welcome")
  };

  useEffect(() => {
    const getUsers=async ()=>{
        const res=await axios.get("", {
            headers:{
                Authorization:"Bearer " + localStorage.getItem("token")
            }
        })

        setUsers(res.data)
    }
    return () => getUsers()
    // Implement token refresh logic with setInterval if needed
    // You can periodically call refreshToken to keep the token fresh
  }, [token]);

  return (
    <AuthContext.Provider value={{ error, signin, loading, setLoading, signinClicked, token, login, refreshToken, signout, handleSignInClick, user, setUser, users }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
