import logo from "../assets/logo.png"
import react, {useState} from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import {FaBars,FaTimes} from "react-icons/fa"
import {createContext} from "react";
import FaData from "./FaData";
import Login from "./Login"
import { ShoppingCart } from 'lucide-react';
import { useSelector } from "react-redux";



const Header = () =>{
  const [nav,setNav] = useState(false)
  const [btnName,setbtnName] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  const userDetails = createContext({
    userName:'Rohit',
  })

  const btnSetter = ()=>{
         setbtnName("Login")
  }
  const navSetter= ()=>{
    setNav(!nav)
  }
  
  const cart = useSelector((store)=>store.cart.items)
   return(
   <div className="w-full h-fit Header flex justify-between items-center px-8 bg-[#111827] shadow-lg fixed top-0 left-0 z-50" >
      <div className="logo-container">
        <img className='logo w-28 h-19' src={logo}></img>
      </div>
  
      <div className="nav-items ">
        <ul className="hidden md:flex gap-10 items-center font-title text-xl ">
          
          <li className="hover:text-yellow-500 text-white"><Link to="/">Home</Link></li>
          <li className="hover:text-yellow-500  text-white"><Link to="/about">About Us</Link></li>
          <li className="hover:text-yellow-500  text-white"><Link to="/contact">Contact</Link></li>
          
          <li className="hover:text-yellow-500  text-white" ><Link to="/cart" className="flex items-center"><ShoppingCart/> Cart({cart.length}) </Link></li>
          {/* <li>{userName}</li> */}
          
          <button className="py-1 px-4 border-2 rounded-lg bg-yellow-500" onClick = {()=>{
            btnName=="Login"? setbtnName("Logout"):setbtnName("Login")
          }} >{btnName}</button>

           {(btnName==="Logout")&& <Login close={btnSetter}/>}
        </ul>
      </div>
      <div className="md:hidden cursor-pointer hover:scale-105 duration-150 z-30 "  onClick={()=>{
        setNav(!nav)}}>
        {nav ?<FaTimes size={30}/>:<FaBars size={30}/>}
        
      </div>
      {nav && <FaData setNav={navSetter}/>}
    </div>
  )
}
export default Header;