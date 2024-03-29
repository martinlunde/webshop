import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Product } from "./useProducts";

export const QueryKeyShoppingCart = "shoppingcart";

export type ShoppingCartProduct = Product & {
    quantity: number;
}

export type ShoppingCart = {
    products: ShoppingCartProduct[]
}

const useShoppingCart = () => {
    const queryClient = useQueryClient();
    const shoppingCartQuery = useQuery({
        queryFn: () => {
            const emptyCart: ShoppingCart = {
                products: [],
            }
            return queryClient.getQueryData<ShoppingCart>([QueryKeyShoppingCart]) ?? emptyCart;
        },
        queryKey: [QueryKeyShoppingCart]
    });

    return {
        shoppingCart: shoppingCartQuery.data,
        itemCount: shoppingCartQuery.data?.products.reduce((total, product) => total += product.quantity, 0),
        ...shoppingCartQuery
    }
};

export default useShoppingCart;