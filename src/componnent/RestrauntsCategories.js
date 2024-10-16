import { MdKeyboardArrowRight } from "react-icons/md"
import ItemsCards from "./ItemsCards";

const RestrauntsCategories = ({ data,showElement,handleClick })=>{
   
    return (
        <div className="w-full">
            {/* {accordian header} */}
            <div className="w-[75%] mx-auto my-2 text-center shadow-lg p-4 border-4 rounded-lg ">
                <div className='flex justify-between cursor-pointer ' onClick={()=>handleClick()} >
                <span className="font-bold text-sm sm:text-lg">{data.title} ({data.itemCards.length})</span>
                <span className="inline-block "><MdKeyboardArrowRight className={showElement?"rotate-90":"rotate-0"} size={30}/></span>
                </div>
                { showElement && <ItemsCards items={data.itemCards}/>}
            </div>
            
            {/* {accordian data} */}
         

        </div>
    )
}
export default RestrauntsCategories