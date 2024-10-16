import {useState} from "react"

import Shimmer from "./Shimmer";
import RestrauntsCategories from "./RestrauntsCategories";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

import { MdStars } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { PiArrowsVerticalBold } from "react-icons/pi";

export const RestrauntMenu = () => {
    const [arrayIndex,setarrayIndex] = useState(null)
   
   const {resId} = useParams();
    
   
  const resMenu = useResMenu(resId)
    
  if(resMenu===null) return <Shimmer/>;
  const {name,areaName,cuisines,totalRatingsString,avgRating,costForTwoMessage,sla} = resMenu?.cards[2].card?.card?.info
  const menuItem = resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards 
  
    
      const Categories = menuItem.filter((obj)=> obj.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
      
     
    
      // Toggle category visibility
  const handleClick = (index) => {
    setarrayIndex(arrayIndex === index ? null : index);
  };


    

 return (
  <div className="w-full h-fit pt-[90.94px] flex flex-col justify-center items-center ">
    <div className="w-[75%] h-full pt-2  ">
         <div className=" w-full">

          <div className="text-4xl pb-8 font-title mt-4 ml-2  ">
          <h1>{name}</h1>
          </div>
   
         <div className="rounded-lg border-b-8 shadow-lg border-gray-100 border-x-8 rounded-t-none ">
          <div className="border-2 py-8 pl-2 rounded-lg rounded-t-sm font-title flex flex-col items-start shadow-lg shadow-gray-500  ">

           <div className="flex justify-center gap-1 items-center font-title">
            <p><MdStars className="bg-yellow-500 rounded-full" size={25}/></p>
            <p className="text-xl">{`${avgRating}  (${totalRatingsString})`}</p>
            <p><BsDot/></p>
            <p className="text-lg">{costForTwoMessage}</p>
           </div>

           <div className="text-md ml-8 border-b-2 border-red-500 text-red-500">
            <p className="pb-0">{cuisines.join(", ")}</p>
           </div>

           <div className="text-lg pl-2 flex ">
            <div className="pt-3"> <PiArrowsVerticalBold size={30}/></div>
            <div>
            <p>Outlet: {areaName}</p>
            <p>Delivery time: {`${sla.deliveryTime} Minutes`}</p>
            </div>
           
             </div>
          </div>
          </div>

         </div>

    </div>
       
      {/* {food cartegories accoordation} */}
      {Categories.map((e,index)=>(<RestrauntsCategories key={e?.card?.card.title} data={e?.card?.card} showElement={ arrayIndex===index}  handleClick={()=>handleClick(index)}/>)
          
      )}
      
  </div>
  ) 
}
