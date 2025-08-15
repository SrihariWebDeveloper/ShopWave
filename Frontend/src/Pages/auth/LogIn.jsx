import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Components/Context/Context.jsx";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LogIn = () => {
  const navigator = useNavigate();
  const [auth, setAuth] = useState("Login");
  const {token,setToken} = useContext(ShopContext);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(auth==="Login"){
      const responce = await axios.post("http://localhost:3000/api/user/login",{email,password});
      if(responce.data.success){
        setToken(responce.data.token);
        localStorage.setItem("token",responce.data.token);
      }else{
        toast.error(responce.data.message);
      }
    }else{
      const responce = await axios.post("http://localhost:3000/api/user/register",{name,email,password});
      if(responce.data.success){
        setToken(responce.data.token);
        localStorage.setItem("token",responce.data.token);
      }else{
        toast.error(responce.data.message);
      }
    }
  }
  useEffect(()=>{
    if(token){
      navigator('/');
    }
  },[token]);
  return (
    <div className="flex flex-row mt-36 justify-center">
      <form onSubmit={handleSubmit} className="bg-white shadow-xs border rounded w-89">
        <div className="">
          <div className="text-center font-bold mt-6 mb-4">
            <h2>{auth ==="Login"? "Login" : "Sign Up"}</h2>
          </div>
          <div className="flex flex-col gap-2 m-4">
            {auth ==="Login"? (
              ""
            ) : (
              <div className="">
                <label htmlFor="username">UserName</label>
                <br />
                <input
                  type="text"
                  name=""
                  id="username"
                  placeholder="Enter UserName" value={name}
                  className="border mt-1 p-2 rounded w-full" onChange={(e)=>setName(e.target.value)}
                />
              </div>
            )}
            <div className="">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name=""
                id="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter Email" autoComplete="none"
                className="border mt-1 p-2 rounded w-full"
              />
            </div>
            <div className="">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                autoComplete="none"
                name=""
                id="" value={password}
                className="border mt-1 p-2 rounded w-full" onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div className="mx-4 my-4 bg-black text-white text-center p-2 cursor-pointer">
            <button type="submit" className="">
              {auth ==="Login" ? "Login" : "Sign Up"}
            </button>
          </div>
          <div className="">
            {auth==="Login" ? <p className="mx-6 my-2">Forgot Password?</p> : ""}
            <hr className="mx-4" />
            {auth ==="Login"? (
              <p className="m-2 text-center">
                Create account? <span className="text-blue-400" onClick={()=>setAuth("Sign Up")}>SignUp</span>
              </p>
            ) : (
              <p className="m-2 text-center">
                Already have an Account?
                <span className="text-blue-400" onClick={()=>setAuth("Login")}>Login</span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
