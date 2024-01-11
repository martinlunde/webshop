import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const ProductsPage = () => {
    const { products } = useProducts();

    return (
        <div className="flex flex-col">
            {products.map((product, index) => (
                <Link key={index + product.id} to={`/products/${product.id}`}>
                    {product.title}
                </Link>
            ))}
        </div>
    );
};

export default ProductsPage;
