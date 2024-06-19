import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    console.warn(name + " " + password + " " + email);

    const result = await fetch("http://localhost:1234/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const finalResult = await result.json();
    if (finalResult) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1 className="text-center p-4  font-semibold">SIGN UP</h1>
      <div className="flex flex-col ml-[40%] w-96 gap-2">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border-solid border-2 border-black"
        />
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border-solid border-2 border-black"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border-solid border-2 border-black"
        />
        <button
          className="bg-blue-300 w-32 p-4 rounded-lg ml-[35%]"
          onClick={collectData}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
