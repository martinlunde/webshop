import { useQuery } from "@tanstack/react-query";
import { handleRequest } from "./helper";
import { Product } from "./useProducts";

export const QueryKeyProductsByCategory = "products-by-category";

export type UseProductsByCategoryOptions = {
    category?: string;
}

const useProductsByCategory = ({ category }: UseProductsByCategoryOptions) => {
    const productsQuery = useQuery({
        queryFn: () => handleRequest<Product[]>("GET", `/products/category/${category}`),
        queryKey: [QueryKeyProductsByCategory, category],
        enabled: !!category
    })

    return {
        products: productsQuery.data ?? [],
        ...productsQuery
    }
}

export default useProductsByCategory;