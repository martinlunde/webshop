import { useQuery } from "@tanstack/react-query";
import { handleRequest } from "./helper";
import { Product } from "./useProducts";

export const QueryKeyProduct = "product";

const useProduct = (productId?: string) => {
    const productQuery = useQuery({
        queryFn: () => handleRequest<Product>("GET", `/products/${productId}`),
        queryKey: [QueryKeyProduct, productId],
        enabled: !!productId
    })

    return {
        product: productQuery.data,
        ...productQuery
    }
}

export default useProduct;