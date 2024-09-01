import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    let confirmAction = window.confirm("Remember your password");
    if (confirmAction) {
      try {
        const response = await axios.post(
          "http://localhost:3000/acc/signup",
          data
        );
        
        console.log("Response from server:", response.data);

        if (!response.data.success) { // Assuming the server response has a `success` field
          alert("Enter valid details");
        } else {
          alert("User created successfully");
          navigate("/login");
         
        }
        setData({ name: "", email: "", password: "" });
      } catch (error) {
        console.log("Error in submission:", error);
      }
    }
  };

  return (
    <>
      <div className="w-full flex justify-center ">
        <div className="container h-2/3 sm:w-1/2 mx-8 border-x-2 border-white rounded-xl  mt-8">
          <form onSubmit={handleSubmit} className="flex flex-col justify-center">
            <input
              className="px-2 mx-8 mt-2 rounded-xl border-2 border-blue-400"
              placeholder="Enter your name"
              type="text"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              name="name"
            ></input>

            <input
              className="px-2 mx-8 mt-2 rounded-xl border-2 border-blue-400"
              placeholder="eg:xyz@gmail.com"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              name="email"
            ></input>
            <input
              className="px-2 mx-8 mt-2 rounded-xl border-2 border-blue-400"
              placeholder="password"
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              name="password"
            ></input>

            <button className="text-white bg-green-500 rounded-xl p-1 w-1/2 mx-[25%] mt-4 ring-white ring-1">
              Submit
            </button>
          </form>
          <Link to="/login">
            <span>I have an Account</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
