"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
export default function ResetPasswordPage() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const updatePassword = async () => {
    try {
      const response = await axios.post("/api/users/resetPassword", {
        token,
        password,
      });
      console.log("reset success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Reset password</h1>
      <hr />

      <label htmlFor="email">New Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter new password"
      />
      <button
        onClick={updatePassword}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Update
      </button>
      <Link href="/login">Visit Login page</Link>
    </div>
  );
}
