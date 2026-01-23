import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Navbar from "../Navbar/Navbar";
import Products from "../../Pages/Profucts/Products";
import DetailleProduct from "../../Pages/Profucts/DetailleProduct";
import Checkout from "../../Pages/Checkout/Checkout";

export default function Header() {
  const Linkes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: "Detaille/:id",
          element: <DetailleProduct />,
        },
        {
          path: "Checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);

  function Layout() {
    return (
      <div>
        <Navbar />
        <main className="mt-20">
          <Outlet />
        </main>
      </div>
    );
  }

  return <RouterProvider router={Linkes}></RouterProvider>;
}
