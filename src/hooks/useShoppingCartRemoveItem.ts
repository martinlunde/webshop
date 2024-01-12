import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QueryKeyShoppingCart, ShoppingCart } from "./useShoppingCart";

const useShoppingCartRemoveItem = () => {
    const queryClient = useQueryClient();
    const { mutate: removeItem, ...rest } = useMutation({
        mutationFn: async (productId: string) => {
            const cart = queryClient.getQueryData<ShoppingCart>([QueryKeyShoppingCart]);
            
            if (!cart) {
                throw Error("Cart does not exist")
            }

            const itemIndex = cart.products.findIndex(p => p.id === productId);
            if (itemIndex !== -1) {
              // Subtract 1 from the quantity
              cart.products[itemIndex].quantity -= 1;
        
              // Remove the product if quantity hits 0
              if (cart.products[itemIndex].quantity <= 0) {
                cart.products.splice(itemIndex, 1);
              }
            }

            return queryClient.setQueryData([QueryKeyShoppingCart], cart);
        },
    });

    return {
        removeItem,
        ...rest
    }
};

export default useShoppingCartRemoveItem;