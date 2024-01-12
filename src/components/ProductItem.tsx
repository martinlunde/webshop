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
            className="flex flex-col border rounded p-4 hover:scale-105 ease-in-out duration-200"
            to={`/products/${id}`}
        >
            <div className="flex self-center justify-center items-center h-32 w-32 md:h-40 md:w-40 rounded-full border overflow-hidden">
                <img
                    className="object-contain h-24 w-24 md:h-32 md:w-32"
                    src={image}
                    alt={title}
                />
            </div>
            <p className="self-end mt-4 underline sm:text-lg">{`${price} kr`}</p>
            <h3 className="max-w-44 mt-4 text-sm sm:text-base">{title}</h3>
        </Link>
    );
};

export default ProductItem;
