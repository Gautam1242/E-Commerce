<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [currentState, setCurrentState] = useState("Login");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        //calling the registration api
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Signup Successfully");
        } else {
          toast.error(response.data.message);
        }
      } else {
        //calling the login api
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          toast.success("Login Successfully");
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
=======
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const {token,setToken,navigate,backendUrl}=useContext(ShopContext);

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const [currentState,setCurrentState]=useState('Login');


  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    try {
      if(currentState==='Sign Up'){
        //calling the registration api
        const response=await axios.post(backendUrl+'/api/user/register',{name,email,password});
        if(response.data.success){
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token);
          toast.success(response.data.message);
        }
        else{
          toast.error(response.data.message);
        }
      }
      else{
        //calling the login api
        const response=await axios.post(backendUrl+'/api/user/login',{email,password});
        if(response.data.success){
          toast.success(response.data.message);
          setToken(response.data.token);
          localStorage.setItem("token",response.data.token);
        }
        else{
>>>>>>> cf25d1785d34efa5a53683535b1921595e16cb49
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
<<<<<<< HEAD
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        autoComplete="username"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        autoComplete="current-password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        {currentState === "Login" ? (
          <p className="cursor-pointer">Forgot Password ?</p>
        ) : (
          ""
        )}
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
=======
  }

  useEffect(()=>{
    if(token){
      navigate('/');
    }
  },[token])



  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState==='Login'?'':<input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' autoComplete='username' required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' autoComplete='current-password' required/>
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        {currentState==='Login'?<p className='cursor-pointer'>Forgot Password ?</p>:''}
        {currentState==='Login'?<p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>:<p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState==='Login'?'Sign In':'Sign Up'}</button>
    </form>
  )
}

export default Login
>>>>>>> cf25d1785d34efa5a53683535b1921595e16cb49
