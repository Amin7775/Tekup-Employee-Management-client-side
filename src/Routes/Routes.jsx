import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllHome from "../Pages/Dashboard/Shared/AllHome/AllHome";
import EmployeeList from "../Pages/Dashboard/HR/EmployeeList/EmployeeList";
import PaymentHistory from "../Pages/Dashboard/Employee/PaymentHistory/PaymentHistory";
import WorkSheet from "../Pages/Dashboard/Employee/WorkSheet/WorkSheet";
import ContactUsMessages from "../Pages/Dashboard/Admin/ContactUsMessages/ContactUsMessages";

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
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // any user route
        {
          path: 'home',
          element:<AllHome></AllHome>
        },
        // employee routes
        {
          path: 'payment-history',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'work-sheet',
          element: <WorkSheet></WorkSheet>
        },
        // HR Route
        {
          path:"employee-list",
          element:<EmployeeList></EmployeeList>
        },
        // Admin Route
        {
          path:"contact-us-messages",
          element:<ContactUsMessages></ContactUsMessages>
        }
      ]
    }
  ]);


export default router