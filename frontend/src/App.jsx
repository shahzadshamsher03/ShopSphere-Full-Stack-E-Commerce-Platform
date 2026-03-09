import React from 'react'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Verify from './pages/Verify'
import VerifyEmail from './pages/VerifyEmail'
import Footer from './components/Footer'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Dashboard from './pages/Dashboard'
import ShowUserOrders from './pages/Admin/ShowUserOrders'
import AdminOrders from './pages/Admin/AdminOrders'
import AdminProduct from './pages/Admin/AdminProduct'
import AddProduct from './pages/Admin/AddProduct'
import AdminSales from './pages/Admin/AdminSales'
import AdminUsers from './pages/Admin/AdminUsers'
import UserInfo from './pages/Admin/UserInfo'
import ProtectedRoute from './components/ProtectedRoute'
import SingleProduct from './pages/SingleProduct'
import AddressForm from './pages/AddressForm'
import OrderSuccess from './pages/OrderSuccess'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Navbar /><Home /><Footer /></>
  },
  {
    path: '/signup',
    element: <><Signup /></>
  },
  {
    path: '/login',
    element: <><Login /></>
  },
  {
    path: '/verify',
    element: <><Verify /></>
  },
  {
    path: '/verify/:token',
    element: <><VerifyEmail /></>
  },
  {
    path: '/profile/:userId',
    element: <ProtectedRoute><Navbar /><Profile /></ProtectedRoute>
  },
  {
    path: '/products',
    element: <><Navbar /><Products /></>
  },
  {
    path: '/products/:id',
    element: <><Navbar /><SingleProduct /></>
  },
  {
    path: '/cart',
    element: <ProtectedRoute><Navbar /><Cart /></ProtectedRoute>
  },
   {
    path: '/address',
    element: <ProtectedRoute><AddressForm/></ProtectedRoute>
  },
   {
    path: '/order-success',
    element: <ProtectedRoute><OrderSuccess/></ProtectedRoute>
  },
  {
    path: '/dashboard',
    element:<ProtectedRoute adminOnly={true}><Navbar/><Dashboard /></ProtectedRoute>,
    children: [
      {
        path: "sales",
        element:<AdminSales/>
      },
      {
        path: "add-product",
        element:<AddProduct />
      },
      {
        path: "products",
        element:<AdminProduct />
      },
      {
        path: "orders",
        element:<AdminOrders />
      },
      {
        path: "users/orders/:userId",
        element:<ShowUserOrders />
      },
      {
        path: "users",
        element:<AdminUsers/>
      },
      {
        path: "users/:id",
        element:<UserInfo/>
      },
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


export default App