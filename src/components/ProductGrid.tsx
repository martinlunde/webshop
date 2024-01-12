import { Product } from "../hooks/useProducts";
import ProductItem from "./ProductItem";

const ProductGrid = ({ products }: { products: Product[] }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-10 h-fit w-fit">
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

export default ProductGrid;
