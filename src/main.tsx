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
import WebshopLayout from "./components/layout";
import ProductDetailsPage from "./pages/ProductDetailsPage.tsx";
import ProductGrid from "./components/ProductGrid.tsx";
import ProductCategoryGrid from "./components/ProductCategoryGrid.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <WebshopLayout />,
        children: [
            {
                index: true,
                element: <Navigate replace to={"/products"} />,
            },
            {
                path: "/products",
                element: <ProductsPage />,
                children: [
                    {
                        index: true,
                        element: <ProductGrid />,
                    },
                    {
                        path: "/products/category/:categoryName",
                        element: <ProductCategoryGrid />,
                    },
                ],
            },
            {
                path: "/products/:productId",
                element: <ProductDetailsPage />,
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
