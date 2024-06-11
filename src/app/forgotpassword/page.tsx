"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = async () => {
    try {
      const response = await axios.post("api/users/forgotpassword", { email });
      console.log("Email sent");
      setSent(true);
    } catch (error: any) {
      console.log("reset failed", error.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl">Forgot password</h1>
      {sent && <h1> Reset email sent, please check your email</h1>}
      <hr />

      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter your email"
      />
      <button
        onClick={handleSubmit}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Reset
      </button>
      <Link href="/login">Visit Login page</Link>
    </div>
  );
}
