import { useState, useEffect } from "react";


const useMenu = (resId) => {

    const [restaurant , setRestaurant] = useState({});

    useEffect(() => {
        getRestaurant();
    }, []);

    const getRestaurant = async () => {
        const data = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2623116&lng=77.4727068&restaurantId=${resId}&submitAction=ENTER`);

        const json = await data.json();

        const info = json?.data?.cards[0]?.card?.card?.info;

        let menu =
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      menu = menu.filter((menu) => menu.card.card.hasOwnProperty("itemCards"));

      const res = {
        menu : menu,
        info : info,
      }
    //   console.log(res)
      setRestaurant(res);
      console.log(restaurant);

    }
    
    return restaurant;
   
}

export default useMenu;