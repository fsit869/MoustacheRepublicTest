import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {ProductPage} from "@/pages/Product.page";
import MainLayout from "@/components/MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
    ]
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
