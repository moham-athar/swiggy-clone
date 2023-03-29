import React , {Suspense , lazy, useState} from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import './index.css';
import Footer from './components/Footer';
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";


const Cart = lazy(() => import("./components/Cart"))
const Profile = lazy(()=> import ("./components/Profile"))
const Contact = lazy(() => import("./components/Contact"))


const App = () => {

  const [user, setUser] = useState({
    name : "lucifer"
  })

  return ( 
    <Provider store = {store}>
      <UserContext.Provider value = {{
        user : user,
        setUser : setUser,
      }}>
    <Header />
    <Outlet />
    <Footer />
    </UserContext.Provider>
    </Provider>
   )
}

export default App


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [ 
      {
        path: "/",
        element: <Body />
      },
      {
      path: "/profile",
      element: <Suspense fallback = {<h1>Loading....</h1>}><Profile /></Suspense>
    },
    {
      path: "/contact",
      element: <Suspense fallback = {<h1>Loading....</h1>}><Contact /></Suspense>
    },
  
    {
      path: "/restaurant/:resId",
      element: <RestaurantMenu />
    },
    {
      path: "/cart",
      element: <Suspense fallback = {<Shimmer />}> <Cart /></Suspense>
    },
    {
      path: "/cart",
      element: <Cart />
    }
  ]
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router = {appRouter} />
);

