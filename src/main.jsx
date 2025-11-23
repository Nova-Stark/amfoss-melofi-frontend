import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Player from './pages/Player.jsx';
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {path: "/" , element : <Login/>},
  {path:"/signup" , element : <SignUp/>},
  {path: "/home",element:<Home/>},
  {path : "/player", element: <Player/>},
  {path:"/profile", element: <Profile/>},
  {path:"*" ,element:<Login/>} 
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider  router={router}/>
 </StrictMode>
)
