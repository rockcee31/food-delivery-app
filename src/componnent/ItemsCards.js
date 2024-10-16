import { MENU_URL } from "../utils/constant";
import OrderModal from "./OrderModal";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemsCards = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  // Function to get current quantity of an item from Redux
  const getCartQuantity = (id) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === id);
    return cartItem ? cartItem.quantity : 0;
  };

  // Handle adding item to cart (initialize it)
  const handleAdd = (item) => {
    const currentQuantity = getCartQuantity(item.card.info.id);
    if (currentQuantity === 0) {
      dispatch(addItem({ ...item.card.info, quantity: 1 })); // Add item to cart with quantity 1
    }
  };

  // Handle incrementing the quantity
  const increment = (item) => {
    dispatch(addItem({ ...item.card.info, quantity: 1 })); // Increment by adding 1
  };

  // Handle decrementing the quantity
  const decrement = (item) => {
    const currentQuantity = getCartQuantity(item.card.info.id);
    if (currentQuantity > 0) {
      if (currentQuantity === 1) {
        // If quantity is 1, remove the item from the cart
        dispatch(removeItem({ id: item.card.info.id }));
      } else {
        // Otherwise, reduce the quantity by 1
        dispatch(addItem({ ...item.card.info, quantity: -1 })); // This will decrement the quantity
      }
    }
  };

  return (
    <div className="z-50">
      {items.map((item, index) => {
        const id = item?.card?.info?.id || index;

        if (!item?.card?.info) {
          return null; // Return null to skip this item if info is not available
        }

        const { name, price, ratings, imageId } = item.card.info;
        const ratingValue = ratings?.aggregatedRating?.rating || "";
        const ratingCount = ratings?.aggregatedRating?.ratingCounts || "N/A";
        const currentQuantity = getCartQuantity(id);

        return (
          <div key={id} className="border-b-2 m-2 p-2 text-start flex justify-between">
            <div className="w-20 sm:w-96">
              <p className="text-xs sm:text-lg">{name}</p>
              <p>₹{price ? price / 100 : 199}</p>
              <div>
                <p>{ratingValue} ({ratingCount})</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute md:top-[117px] bg-white text-center md:left-[38px] text-green-600 rounded-lg font-bold border-2 top-14 left-3">
                {currentQuantity ? (
                  <div className="flex text-lg items-center md:py-1 md:px-3 px-1">
                    <button
                      className="md:pr-2 md:mr-2 md:text-xl pr-1 mr-1"
                      onClick={() => decrement(item)}
                    >
                      -
                    </button>
                    <h1>{currentQuantity}</h1>
                    <button
                      className="md:pl-2 md:ml-2 md:text-xl pl-1 ml-1"
                      onClick={() => increment(item)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="md:py-1 md:px-6 px-3 text-sm"
                    onClick={() => handleAdd(item)}
                  >
                    ADD
                  </button>
                )}
              </div>
              {imageId ? (
                <img
                  className="md:h-36 md:w-40 h-20 w-20 rounded-lg"
                  src={MENU_URL + imageId}
                  alt={name}
                />
              ) : (
                <div className="md:h-36 md:w-40 h-20 w-20 rounded-lg"></div>
              )}
            </div>
          </div>
        );
      })}
      {cartItems.some((cartItem) => cartItem.quantity > 0) && <OrderModal />}
    </div>
  );
};

export default ItemsCards;
