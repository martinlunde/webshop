import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import Button from "../components/Button";
import useShoppingCartAddItem from "../hooks/useShoppingCartAddItem";
import Spinner from "../components/Spinner";

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const { product, isPending } = useProduct(productId);
    const navigate = useNavigate();

    const { addItem } = useShoppingCartAddItem();

    if (!product && isPending) {
        return (
            <div className="flex w-full justify-center mt-24">
                <Spinner />
            </div>
        );
    }

    function handleAddItem() {
        addItem(
            { product: product!, quantity: 1 },
            {
                onSuccess: () => {
                    navigate("/");
                },
            }
        );
    }

    return (
        <div className="mx-4 md:mx-20 my-8">
            <Button onClick={() => navigate(-1)} title="<- Go Back" />
            <section className="grid grid-cols-1 md:grid-cols-2 mt-8">
                <div>
                    <h2 className="text-2xl">{product?.title}</h2>
                    <p className="mt-2">{product?.description}</p>
                    <p className="text-xl mt-4">{`${product?.price} kr`}</p>
                    <button
                        className="bg-purple-700 text-white p-2 px-10 mt-4 hover:bg-purple-500 rounded-lg"
                        onClick={handleAddItem}
                    >
                        {"Legg i handlekurv"}
                    </button>
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
