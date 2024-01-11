import { Outlet } from "react-router-dom";
import CategoryNavbar from "../components/CategoryNavbar";

const ProductsPage = () => {
    return (
        <div className="flex flex-row w-full">
            <CategoryNavbar />
            <div className="ml-10 flex justify-center w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default ProductsPage;
