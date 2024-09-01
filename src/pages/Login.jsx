import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {
  
   
     
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const handlesubmit=()=>{
        let confrm=confirm("Remember your password")
    }


  return (
         

   <>
   <div className="w-full flex justify-center ">
      <div className="container h-2/3 sm:w-1/2 mx-8 border-x-2 border-white rounded-xl  mt-8">
        <form onSubmit={handlesubmit}  disabled={password.length>5} className="flex flex-col justify-center ">
         
          <input
            className=" px-2   mx-8 mt-2 rounded-xl border-2 border-blue-400 "
            placeholder="eg:xyz@gmail.com"
            type="email"
            value={email}
            onChange={e=>setemail(e.target.value)}
            name="email"

          ></input>
          <input
            className=" px-2   mx-8 mt-2 rounded-xl border-2 border-blue-400 "
            placeholder="password"
            type="password"
            value={password}
            onChange={e=>setpassword(e.target.value)}
            name="password"

          ></input>

         <button className="text-white bg-green-500 rounded-xl p-1 w-1/2 mx-[25%] mt-4 ring-white ring-1"   > Submit</button>

        </form>
        <Link to='/signup'><span>I'd have a Account</span></Link>
       
      </div>
    </div>
   </>
    
  )
}

export default Login
