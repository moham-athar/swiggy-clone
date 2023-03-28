import React , {Suspense , lazy} from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import './index.css';
import Footer from './components/Footer';
import Error from "./components/Error";
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


const Cart = lazy(() => import("./components/Cart"))
const Profile = lazy(()=> import ("./components/Profile"))



const App = () => {
  return ( 
    <Provider store = {store}>
    <Header />
    <Outlet />
    <Footer />
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
      element: <Contact />
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

