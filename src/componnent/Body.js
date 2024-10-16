import RestaurantCard from "./RestauranCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");
  const [page, setPage] = useState(0); // Adjusting pagination logic
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(""); // New state for error handling

  const onlineStatus = useOnlineStatus();

  // Fetch restaurant data on mount
  useEffect(() => {
    fetchData();
  }, []);

  // Infinite scroll handler
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch restaurant data
  const fetchData = async () => {
    try {
      setIsFetching(true);
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      if (!response.ok) throw new Error("Failed to fetch restaurants");

      const json = await response.json();
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setFilteredListOfRestaurants(restaurants);
      setIsFetching(false);
    } catch (err) {
      console.error(err);
      setError("Could not load restaurant data. Please try again later.");
      setIsFetching(false);
    }
  };

  // Fetch more restaurants for pagination
  useEffect(() => {
    if (page > 0) fetchMoreData(page);
  }, [page]);

  const fetchMoreData = async (pageNum) => {
    setIsFetching(true);
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&offset=${pageNum}&sortBy=RELEVANCE&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const json = await response.json();
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      const newRestaurants = restaurants.filter(
        (rest) => !listOfRestaurants.some((existingRest) => existingRest.info.id === rest.info.id)
      );

      setListOfRestaurants((prev) => [...prev, ...newRestaurants]);
      setFilteredListOfRestaurants((prev) => [...prev, ...newRestaurants]);
      setIsFetching(false);
    } catch (err) {
      console.error(err);
      setError("Could not load more restaurant data. Please try again later.");
      setIsFetching(false);
    }
  };

  // Handle scroll for infinite scrolling
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isFetching) {
      setPage((prev) => prev + 10);
    }
  };

  // Search filtering
  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchedItem.toLowerCase())
    );
    setFilteredListOfRestaurants(filteredList);
  };

  // Reset search input
  const handleResetSearch = () => {
    setSearchedItem("");
    setFilteredListOfRestaurants(listOfRestaurants);
  };

  // Check online status
  if (onlineStatus === false) return <h1>Your Internet is not working</h1>;

  // Error handling
  if (error) return <h1>{error}</h1>;

  // Loading shimmer
  if (!listOfRestaurants.length && !isFetching) {
    return <Shimmer />;
  }

  return (
    <div className="body w-full flex flex-col min-h-screen pt-[90.94px] pb-[20px]">
      <div className="flex w-full justify-center items-center py-2">
        <div className="w-1/2 flex h-12 mr-12">
          <input
            className="py-1 rounded-lg w-full border-2 border-gray-300 ms:w-1/2 ms:text-sm "
            placeholder="Search for restaurants and food"
            type="text"
            value={searchedItem}
            onChange={(e) => {
              setSearchedItem(e.target.value);
              handleSearch(); // Trigger search as you type
            }}
          />
          <button
            className="ml-2 px-4 py-1 border-2 border-gray-300 rounded-lg font-bold bg-yellow-500 ms:p-0 ms:py-0 ms:text-sm"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="ml-2 px-4 py-1 border-2 border-gray-300 rounded-lg font-bold bg-red-500 ms:p-0 ms:py-0 ms:text-sm"
            onClick={handleResetSearch}
          >
            Reset
          </button>
        </div>
        <div className="py-2 ml-19.5">
          <button
            className="hidden md:border-2 rounded-3xl bg-yellow-500 py-3 px-2 font-bold"
            onClick={() => {
              const topRatedRestaurants = listOfRestaurants.filter(
                (restau) => restau.info.avgRating > 4
              );
              setFilteredListOfRestaurants(topRatedRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex justify-center w-full">
        {filteredListOfRestaurants.length === 0 ? <Shimmer/> : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 max-w-screen-lg gap-10">
            {filteredListOfRestaurants.map((eachRes) => (
              <Link
                className="block w-fit"
                to={`/restraunt/${eachRes.info.id}`}
                key={eachRes.info.id}
              >
                <RestaurantCard resdetail={eachRes} />
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Loading shimmer at the bottom for infinite scroll */}
      {isFetching && null}
    </div>
  );
};

export default Body;




// const count =() =>{ 
// const[count,setcount ]=useState(0);
// return(


// )  
// }  

