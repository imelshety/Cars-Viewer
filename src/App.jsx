import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import CarsList from "./components/CarsList/CarsList";
import CarDetails from "./components/CarsList/SubCompoents/CarDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,  element: <Home /> },
      { path:'/home',  element: <Home /> },
      { path:'/cars',  element: <CarsList /> },
      { path:'/cars/:carId', element: <CarDetails /> }, 
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
