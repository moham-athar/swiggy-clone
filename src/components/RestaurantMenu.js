import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import useMenu from "../utils/useMenu";


const RestaurantMenu = () => {

  const { resId } = useParams();

  const res = useMenu(resId);
  const menu = res.menu;
  const info = res.info;
  console.log(res.menu);


  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    console.log(item)
    dispatch(addItem(item?.card?.info));
  }

  return (!menu || !info) ? (
    <Shimmer />
  ) : (
    <div className="ml-80 mr-80 ">
      <div className="p-10 ">
        <div className="about-menu">
          <h2 className="text-2xl">{info?.name}</h2>
          <h3 className="text-sm">{info?.areaName}</h3>
          <h3 className="text-sm">{info?.avgRating} stars</h3>
          <h3>{info?.costForTwoMessage
          }</h3>
        </div>
      </div>
      <div className="food-list-menu">
        <h1 className="text-lg p-2">Menu</h1>
        <ul>
          {



            Object.values(menu).map((item, id) => (
        
                    <div className="flex flex-col">
                       
                     {Object.values(item.card.card.itemCards).map(
                        (item, _key) => (
                          <li className=" p-3 m-2 border-t-2 border-gray-500" key={_key}>
                            <div className="flex justify-between">
                            <div className="">
                              <p>{item.card.info.name}</p>
                              <span>₹{item.card.info.price/100}</span>
                            </div>
                            <div className="">
                              {item.card.info.imageId ? (
                                <img
                                className="w-20 rounded-md"
                                  src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                                  alt=""
                                />
                              ) : (
                                <img src=""></img>
                              )}

                              <button
                                className="m-2 p-2 w-16  bg-orange-500 text-white rounded-md"
                                onClick={() => addFoodItem(item)}
                              >
                                ADD
                              </button>
                            </div>
                            </div>
                          </li>
                        )
                      )}
                     </div>
               
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;