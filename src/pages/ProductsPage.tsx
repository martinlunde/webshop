import { useParams } from "react-router-dom";
import CategoryNavbar from "../components/CategoryNavbar";
import useProducts from "../hooks/useProducts";
import ProductGrid from "../components/ProductGrid";
import { useState } from "react";

const ProductsPage = () => {
    const { categoryName } = useParams();
    const [searchQuery, setSearchQuery] = useState<string>();
    const { products } = useProducts({
        category: categoryName,
        queryString: searchQuery,
    });

    return (
        <div className="flex flex-col md:flex-row w-full">
            <CategoryNavbar />
            <div className="flex flex-col">
                <div className="px-4 md:px-10 pt-4">
                    <input
                        className="border border-black rounded px-4 py-2"
                        placeholder="Search"
                        type="text"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <ProductGrid products={products} />
            </div>
        </div>
    );
};

export default ProductsPage;
