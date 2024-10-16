import { CDN_URL } from "../utils/constant";
const RestaurantCard = ({resdetail})=>{
    const {name,areaName,cuisines,cloudinaryImageId,avgRating} = resdetail?.info;
    return(
     <div className="my-4 p-4 h-lg w-80 overflow-hidden box-border border bg-gray-100 hover:bg-gray-300 rounded-lg md:w-64 lg:w-80">

        <div >
      <img className="w-full h-40 rounded-lg"src={CDN_URL+ cloudinaryImageId }  ></img>
        </div>

        <div className="list-none flex flex-col justify-center pb-8">
       <li className="text-lg font-bold whitespace-nowrap">{name}</li>
       <li>{cuisines.slice(0,3).join(',')}</li>
       <li>{areaName}</li>
       <li>{avgRating}</li>
       </div>
     </div>
   )
   }


export default RestaurantCard;

// export const PromotedCard = (RestaurantCard)=>{
//   return (props)=>(
//     <div>
//       <label className="">Promoted</label>
//       <RestaurantCard   {...props}/>
//     </div>
//   )
// }