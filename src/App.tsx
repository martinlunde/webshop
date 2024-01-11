import useProducts from "./hooks/useProducts";

function App() {
    const { products } = useProducts();

    return (
        <>
            {products.map((product) => (
                <div>{product.title}</div>
            ))}
        </>
    );
}

export default App;
