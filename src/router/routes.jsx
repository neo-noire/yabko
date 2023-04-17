import {
    createBrowserRouter,
} from "react-router-dom";
import { CategoryPage } from "../components/Pages/CategoryPage/CategoryPage";
import { MainPage } from "../components/Pages/MainPage/MainPage";
import { ProductPage } from "../components/Pages/ProductPage/ProductPage";
import { ShopingCart } from "../components/ShopingCart/CartPage/ShopingCart";
import { Layout } from '../Layout/Layout'



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/:id",
                element: <CategoryPage />,
            },
            {
                path: "/:id/:id",
                element: <ProductPage />,
            },
            {
                path: "/cart",
                element: <ShopingCart />,
            },
        ]
    },
]);