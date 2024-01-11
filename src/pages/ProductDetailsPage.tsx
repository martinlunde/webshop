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
        <div>
            <button onClick={() => navigate(-1)}>Go back</button>
            <section className="flex">
                <div>
                    <h2>{product?.title}</h2>
                    <p>{product?.description}</p>
                    <p>{product?.price}</p>
                </div>
                <img src={product?.image} />
            </section>
        </div>
    );
};

export default ProductDetailsPage;
