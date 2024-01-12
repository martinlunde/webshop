import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QueryKeyShoppingCart, ShoppingCart } from "./useShoppingCart";
import { Product } from "./useProducts";

const useShoppingCartAddItem = () => {
    const queryClient = useQueryClient();

    const { mutate: addItem, ...rest } = useMutation({
        mutationFn: async ({product, quantity}: { product: Product; quantity: number }) => {
                const cart = queryClient.getQueryData<ShoppingCart>([QueryKeyShoppingCart]) ?? { products: [] };
                
                const existingItem = cart.products.find(p => p.id === product.id);
                if (!existingItem) {
                    cart.products.push({ quantity, ...product });
                } else {
                    existingItem.quantity += quantity;
                }

                queryClient.setQueryData([QueryKeyShoppingCart], cart);
        },
    });

    return {
        addItem,
        ...rest
    }
};

export default useShoppingCartAddItem;