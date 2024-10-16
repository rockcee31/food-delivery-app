import  {Link} from "react-router-dom"
const FaData=({setNav})=>{
    return (
    
        
            <ul  className="w-full h-screen left-0 absolute top-0 bg-gradient-to-b from-yellow-50 to-yellow-300 flex  flex-col justify-center items-center md:hidden font-title">
               <li className="font-bold text-xl  hover:text-yellow-500 py-2 " onClick={setNav}><Link to="/">Home</Link></li>
               <li  className="font-bold text-xl hover:text-yellow-500 py-2" onClick={setNav}><Link to="/about">About</Link></li>
               <li  className="font-bold text-xl hover:text-yellow-500 py-2" onClick={setNav}><Link to="/contact">Contact</Link></li>
               <li  className="font-bold text-xl hover:text-yellow-500 py-2" onClick={setNav}>Orders</li>
            </ul>
     

)}
export default FaData;