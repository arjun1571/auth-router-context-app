import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './component/Home';
import LogIn from './component/LogIn';
import Register from './component/Register';
import PrivateRoute from './route/PrivateRoute';
import Order from './component/Order';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/home",
          element: <Home></Home>
        },
        {
          path:"/order",
          element: <PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        
      ]
    },
  ]);
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
