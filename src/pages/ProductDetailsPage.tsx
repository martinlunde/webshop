import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
    const { productId } = useParams();

    return <div>{productId}</div>;
};

export default ProductDetailsPage;
