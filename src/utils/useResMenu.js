import {useState,useEffect} from "react"
function useResMenu(resId){
    const [resInfo,setresInfo] =useState(null);
    
    useEffect(
        ()=>{
            fetchData();
        },[]
    )
    
   const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId="+resId)
        const json = await data.json();
        setresInfo(json.data)
        console.log(json.data);
        
   }

    return resInfo;

}

export default useResMenu;