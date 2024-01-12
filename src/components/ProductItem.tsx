import { Link } from "react-router-dom";

export type ProductItemProps = {
    id: string;
    title: string;
    price: string;
    image: string;
};

const ProductItem = ({ id, title, price, image }: ProductItemProps) => {
    return (
        <Link
            className="flex flex-col border rounded p-4"
            to={`/products/${id}`}
        >
            <div className="flex self-center justify-center items-center h-40 w-40 rounded-full border overflow-hidden">
                <img className="object-contain h-32 w-32" src={image} />
            </div>
            <p className="self-end mt-4 underline">{`${price} kr`}</p>
            <h3 className="max-w-44 mt-4">{title}</h3>
        </Link>
    );
};

export default ProductItem;
