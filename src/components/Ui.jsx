import React from "react";
import { useState,useEffect } from "react"
import Table from "./Table";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function Ui() {

const [form, setform] = useState({url:"",username:"",pass:""})
const [userdata,setuserdata]=useState([])

const handlechange=(e)=>{
setform({...form,[e.target.name]:e.target.value})
}

useEffect(() => {
    let fetchdata=async()=>{
      try{
      const responce=await axios.get("http://localhost:3000/")
      setuserdata(responce.data)
      }catch{
        console.log("error in fetching the data");
      }
    }
    fetchdata()
  }, [userdata,<table></table>]);

const handlesubmit= async()=>{
    
    const newentry={...form,id:uuidv4()}
    try{
      const responce=await axios.post('http://localhost:3000/',newentry)
      setuserdata([...userdata,{...form,id:uuidv4()}])
      setform({url:"",username:"",pass:""})

    }catch{
    console.log("error in submission")
    }
    
}













  return (
    <div className="w-full flex justify-center ">
      <div className="container h-2/3 sm:w-1/2 mx-8 border-x-2 border-white rounded-xl  mt-8">
        <div className="flex flex-col justify-center ">
          <input
            className=" px-2  mx-8 mt-2 rounded-xl border-2 border-blue-400 "
            placeholder="enter url"
            type="url"
            value={form.url}
            onChange={handlechange}
            name="url"
          ></input>
          <input
            className=" px-2   mx-8 mt-2 rounded-xl border-2 border-blue-400 "
            placeholder="username"
            type="text"
            value={form.username}
            onChange={handlechange}
            name="username"

          ></input>
          <input
            className=" px-2   mx-8 mt-2 rounded-xl border-2 border-blue-400 "
            placeholder="password"
            type="password"
            value={form.pass}
            onChange={handlechange}
            name="pass"

          ></input>
         <button className="text-white bg-green-500 rounded-xl p-1 w-1/2 mx-[25%] mt-4 ring-white ring-1" disabled={form.pass<5||form.pass==null} onClick={handlesubmit}  > Save</button>

        </div>
        <div>
          
         
        <Table userdata={userdata} setuserdata={setuserdata} setform={setform}></Table>
         
        </div>
      </div>
    </div>
  );
}

export default Ui;
