import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { clearCart } from "../utils/cartSlice"; // Ensure correct import

const OrderModal = () => {
  const [trigger, setTrigger] = useState(true);
  const [orderSuccess, setOrderSuccess] = useState(false); // State to show order success message
  const [orderProcessing, setOrderProcessing] = useState(false); // New state to manage processing
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const location = useLocation();

  // Handle Submit Button Click
  const handleSubmit = () => {
    if (orderProcessing) return; // Prevent re-triggering while processing

    setOrderProcessing(true); // Lock further actions during processing
    setOrderSuccess(true); // Show order success message

    // Delay clearing cart and hiding success message
    setTimeout(() => {
      dispatch(clearCart()); // Clear the cart after success message
      setOrderSuccess(false); // Hide success message
      setOrderProcessing(false); // Unlock further actions
    }, 2000); // 2-second delay
  };

  useEffect(() => {
    // Set trigger to false when on the cart page
    if (location.pathname === "/cart") {
      setTrigger(false);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Order Modal - Showing cart items */}
      {cartItems.length > 0 && !orderSuccess && trigger && (
        <div className="w-full fixed bottom-0 left-0 right-0 h-20 flex justify-between items-center bg-yellow-500 rounded scale-75">
          <div className="ml-10 font-family text-xl">{cartItems.length} items added</div>
          <div className="mr-10 font-title text-xl">
            <Link to="/cart">VIEW CART</Link>
          </div>
        </div>
      )}

      {/* Submit Button */}
      {cartItems.length > 0 && !orderSuccess && !trigger && (
        <div className="w-full fixed bottom-0 left-0 right-0 h-20 flex justify-center items-center bg-yellow-500 rounded scale-75">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Submit Order
          </button>
        </div>
      )}

      {/* Order Success Message */}
      {orderSuccess && (
        <div className="fixed inset-0 flex items-center justify-center text-white p-4 rounded-lg">
          <h1 className="border-2  bg-green-600 py-2 px-4 rounded-lg">Order Successful!</h1>
        </div>
      )}
    </>
  );
};

export default OrderModal;
