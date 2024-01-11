import { Link } from "react-router-dom";

export type ProductItemProps = {
    id: number;
    title: string;
    price: string;
    image: string;
};

const ProductItem = ({ id, title, price, image }: ProductItemProps) => {
    return (
        <Link
            className="flex flex-col items-center border rounded p-2"
            to={`/products/${id}`}
        >
            <div className="flex justify-center items-center h-40 w-40 rounded-full border overflow-hidden">
                <img className="object-contain h-32 w-32" src={image} />
            </div>
            <h3 className="w-44">{title}</h3>
            <p>{price}</p>
        </Link>
    );
};

export default ProductItem;
