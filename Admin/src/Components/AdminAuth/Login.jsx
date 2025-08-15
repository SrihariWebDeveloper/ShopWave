import React, {useState } from "react";
import axios from 'axios'
import { bankend_url } from "../../App.jsx";
import { toast } from "react-toastify";


const Login = ({setToken}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const onSubmitHandler = async(e)=>{
      try {
        e.preventDefault();
        const response = await axios.post("https://shopwave-97x5.onrender.com/api/user/admin",{email,password});
        if(response.data.success){
          setToken(response.data.token);
        }else{
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(response.error.message);
      }
    }

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="bg-white shadow-xs border rounded w-89">
        <form className="" onSubmit={onSubmitHandler}>
          <div className="text-center font-bold mt-6 mb-2">
            <h2>Admin Login</h2>
          </div>
          <div className="flex flex-col gap-2 m-4">
            <div className="">
              <label htmlFor="email">Email</label>
              <br />
              <input required onChange={(e)=>setEmail(e.target.value)}
              value={email} autoComplete="none"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="border mt-1 p-2 rounded w-full"
              />
            </div>
            <div className="">
              <label htmlFor="password">Password</label>
              <br />
              <input required onChange={(e)=>setPassword(e.target.value)}
              value={password} autoComplete="none"
                type="password"
                name="password"
                id="password"
                className="border mt-1 p-2 rounded w-full"
                placeholder="Enter Password"
              />
            </div>
          </div>
          <div className="mx-4 my-4 bg-black text-white text-center p-2 cursor-pointer">
            <button type="submit" className="cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
