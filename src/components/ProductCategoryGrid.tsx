import { useParams } from "react-router-dom";
import useProductsByCategory from "../hooks/useProductsByCategory";
import ProductItem from "./ProductItem";

const ProductCategoryGrid = () => {
    const { categoryName } = useParams();
    const { products, isPending } = useProductsByCategory({
        category: categoryName,
    });

    if (isPending) {
        return "loading...";
    }

    return (
        <div className="grid grid-cols-5 gap-4 my-10 h-fit">
            {products.map((product, index) => (
                <ProductItem
                    key={product.id + index}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                />
            ))}
        </div>
    );
};

export default ProductCategoryGrid;
