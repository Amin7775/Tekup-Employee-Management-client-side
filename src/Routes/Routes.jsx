import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/contact-us",
            element: <ContactUs></ContactUs>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
  ]);


export default router