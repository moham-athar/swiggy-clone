
import Card from './Card'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnline from '../utils/useOnline';
import { CiSearch } from "react-icons/ci"


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filterdRestaurants, setFilterdRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

 
  useEffect(() => {
    getRestaurants(); 
  }, []);

  async function getRestaurants() {    
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2623116&lng=77.4727068&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    
  }

const isOnline = useOnline();

if(!isOnline){
  return <h1>You are Offline</h1>
}

if (!allrestaurants) return null;
if (filterdRestaurants.length == 0) return   ( 
<main className='flex flex-col absolute top-2/4 left-2/4'>
<h1 className='text-2xl'>No restaurant Found </h1>
<Link to="/">
 <div className="ml-16 text-center w-64 bg-orange-600 text-white rounded-md p-2 m-2">SEE RESTAURANTS NEAR YOU</div>
</Link>
</main>)

  return (filterdRestaurants?.length === 0) ? <Shimmer /> : (
    <>
      <div className="m-5 flex justify-center">
        <input
          type="text"
          className="border-solid border-2 rounded p-2 w-3/5 "
          placeholder="Search for restaurant and food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="  text-gray-600 m-2"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allrestaurants);
            // update the state - restaurants
            setFilterdRestaurants (data);
          }}
        >
          <CiSearch className='text-3xl'/>
        </button>
      </div>
      <div className="flex flex-wrap gap-2 bg-slate-100">
        {filterdRestaurants.map((restaurant) => {
          return (
            <Link to = {"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
            <Card  {...restaurant.data}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;