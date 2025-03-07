"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import LoadingSpinner from "../components/loadingSpinner";
import toast from "react-hot-toast";



export default function Signup() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(false);

  const onSignup = async() => {
    console.log("button clicked")
    try{
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log(response.data);
      toast.success("User is successfully created");
      router.push("/login");
    } catch (err) {
      console.log(err);
      const error = err as Error;
      toast.error("Sign up failed. " + error.message );
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  },[user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
      <div className="w-full max-w-md" >
        {loading ? <LoadingSpinner /> : 
          <h1 className="text-2xl text-center">{loading ? "Processing" : "Signup"}</h1> }
        <hr className="mb-4"/>
        <div className="w-full">
          <label htmlFor="username" className="text-left block">username</label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="text-left block">email</label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email"
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="text-left block">password</label>
          <input
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
          />
        </div>
        <div className="w-full flex justify-between">
          <button onClick={onSignup} 
            disabled={buttonDisabled} 
            className={`px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-black hover:text-white ${buttonDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
           Signup
          </button>
          <Link href="/login" className="px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-black hover:text-white">Visit Login</Link>
        </div>
      </div>
    </div>
  );
}