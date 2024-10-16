import { X } from 'lucide-react';
import {useState} from "react";


const Login =({close})=>{
    const [signIn,setsignIn] =useState(true)
    return(
    <div className="inset-0 fixed flex justify-end items-center bg-yellow-300 bg-opacity-15 backdrop-blur-sm ">

        {signIn?(
        <div className=" flex flex-col justify-start items-start  text-black bg-white w-2/5 h-full gap-10 ">
           
           <div className="ml-10 mt-10">
          <button onClick={close}><X size={30}/></button>
         <h1 className="text-4xl  mt-10">Login</h1>
         <ul className="flex font-family text-sm gap-2">
            <li>or</li>
            <li className="cursor-pointer text-yellow-500" onClick={()=>setsignIn(false)}>Create an account</li>
         </ul>
         </div>

            <div className=" ml-10">
            <form className="flex flex-col">
            <input id="email" type="text" placeholder="Email" required className="mb-2 border-2 py-2 pl-8 pr-20 box-border" />
                
            <input id="Password" type="text" placeholder="Password" required className="mb-2 border-2 py-2 pl-8 pr-20  box-border"></input>
            <button className="px-8 py-2 bg-yellow-500  border-2 rounded-lg cursor-pointer">Login</button>
            </form>
            </div>
        </div>):(
             <div className=" flex flex-col justify-start items-start  text-black bg-white w-2/5 h-full gap-10 ">
                <div className="ml-10 mt-10">
          <button onClick={close}><X size={30}/></button>
         <h1 className="text-4xl  mt-10">Sign Up</h1>
         <ul className="flex font-family text-sm gap-2">
            <li>or</li>
            <li className="cursor-pointer text-yellow-500" onClick={()=>setsignIn(true)}>Login to your account</li>
         </ul>
         </div>

            <div className=" ml-10">
            <form className="flex flex-col">
            <input id="Name" type="text" placeholder="Name" required className="mb-2 border-2 py-2 pl-8 pr-20 box-border" />
            <input id="email" type="text" placeholder="Email" required className="mb-2 border-2 py-2 pl-8 pr-20 box-border" />
                
            <input id="Password" type="text" placeholder="Password" required className="mb-2 border-2 py-2 pl-8 pr-20  box-border"></input>
            <button className="px-8 py-2 bg-yellow-500 border-2 rounded-lg cursor-pointer">Login</button>
            </form>
            </div>
             </div>)

        }
        </div>
)
}
export default Login;