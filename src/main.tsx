import React from "react";
import ReactDOM from "react-dom/client";
import ProductsPage from "./pages/ProductsPage.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.tsx";
import ShoppingCartPage from "./pages/ShoppingCartPage.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate replace to={"/products"} />,
            },
            {
                path: "/products",
                element: <ProductsPage />,
            },
            {
                path: "/products/category/:categoryName",
                element: <ProductsPage />,
            },
            {
                path: "/products/:productId",
                element: <ProductDetailsPage />,
            },
            {
                path: "/cart",
                element: <ShoppingCartPage />,
            },
        ],
    },
    {
        path: "*",
        element: <Navigate replace to="/" />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
