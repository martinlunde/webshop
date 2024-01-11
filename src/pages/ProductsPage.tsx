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
        <div className="flex flex-row w-full">
            <CategoryNavbar />
            <div className="flex flex-col w-full">
                <div className="bg-red-500 h-10">
                    <input
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
