import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const { product, isPending } = useProduct(productId);
    const navigate = useNavigate();

    if (!product && isPending) {
        return "loading...";
    }

    return (
        <div className="mx-20 my-8">
            <button
                className="min-h-12 min-w-32 px-8 bg-blue-700 hover:bg-blue-500 text-white rounded-lg"
                onClick={() => navigate(-1)}
            >
                {"<- Go back"}
            </button>
            <section className="grid grid-cols-1 md:grid-cols-2 mt-8">
                <div>
                    <h2 className="text-2xl">{product?.title}</h2>
                    <p className="mt-2">{product?.description}</p>
                    <p className="text-xl mt-4">{`${product?.price} kr`}</p>
                </div>
                <img
                    className="p-8 md:p-0 md:px-8 place-self-center"
                    src={product?.image}
                />
            </section>
        </div>
    );
};

export default ProductDetailsPage;
