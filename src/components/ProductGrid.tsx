import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";

const ProductGrid = () => {
    const { products } = useProducts();

    return (
        <div className="grid grid-cols-5 gap-4 my-10">
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
