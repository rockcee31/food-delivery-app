import { useSelector } from "react-redux";
import ItemsCards from "./ItemsCards"
import { useDispatch } from "react-redux";


const Cart =()=>{
    
    const dispatch = useDispatch();
    const handleClear = ()=>{dispatch(clearCart())}
    const cartItems = useSelector((store)=>store.cart.items)
    const transformedCartItems = cartItems.map((item) => ({
        card: {
          info: {
            id: item.id,
            name: item.name,
            price: item.price,
            ratings: item.ratings,
            imageId: item.imageId,
          },
        },
      }));
    return(
        <div className="text-center pt-[90.94px] flex flex-col items-center ms:pb-[200px]">
           <h1 className=" bg-black px-4 py-2 text-white w-full font-title text-xl">Cards</h1>
           <div className="w-fit px-4 py-2    bg-yellow-500 text-center cursor-pointer" onClick={()=>handleClear()}>Clear Cart</div>
        <div>
            <ItemsCards items={transformedCartItems}/>
        </div>
        
        </div>
    )

}
export default Cart;