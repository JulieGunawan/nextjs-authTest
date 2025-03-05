"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";



export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  })
  const onLogin = async() => {
    
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
      <div className="w-full max-w-md" >
        <h2 className="text-2xl text-center">Login</h2>
        <hr className="mb-4"/>
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
          <button onClick={onLogin} className="px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-black hover:text-white">
            Login
          </button>
          <Link href="/signup" className="px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-black hover:text-white">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}