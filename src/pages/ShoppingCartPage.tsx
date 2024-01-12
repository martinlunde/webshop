import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import useShoppingCart from "../hooks/useShoppingCart";
import useShoppingCartRemoveItem from "../hooks/useShoppingCartRemoveItem";
import { useMemo } from "react";

const ShoppingCartPage = () => {
    const { shoppingCart } = useShoppingCart();
    const { removeItem } = useShoppingCartRemoveItem();
    const navigate = useNavigate();

    const total = useMemo(
        () =>
            shoppingCart?.products.reduce(
                (total, p) => (total += Number(p.price) * p.quantity),
                0
            ),
        [shoppingCart?.products]
    );

    if (!shoppingCart || shoppingCart.products.length === 0) {
        return (
            <div className="w-full mt-24 flex flex-col items-center justify-center">
                <p className="text-lg mb-4">
                    Your shoppingcart seems to be currently empty
                </p>
                <Button
                    title="Shop Now"
                    onClick={() => navigate("/products")}
                />
            </div>
        );
    }

    return (
        <div className="mx-4 md:mx-20 my-8">
            <Button title="<- Go Back" onClick={() => navigate(-1)} />
            <h1 className="text-xl mt-8">Shopping Cart</h1>
            <table className="border-separate [border-spacing:0.75rem] my-8">
                <thead>
                    <tr>
                        <th className="text-left">Product</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingCart?.products.map(
                        ({ id, title, quantity, price }) => (
                            <tr key={id}>
                                <td>{title}</td>
                                <td className="text-center items-center">
                                    {quantity}
                                </td>
                                <td className="text-center">{price}</td>
                                <td className="text-center">
                                    {Number(price) * quantity}
                                </td>
                                <td className="text-center">
                                    <button
                                        className="bg-red-300 px-2 rounded-full"
                                        onClick={() => removeItem(id)}
                                    >
                                        X
                                    </button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            <div className="mt-4">
                <h2 className="font-bold">{`Total: ${total} kr`}</h2>
            </div>
        </div>
    );
};

export default ShoppingCartPage;
