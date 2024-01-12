import { useQuery } from "@tanstack/react-query";
import { handleRequest } from "./helper";

export type Product = {
    id: string;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

export const QueryKeyProducts = "products";

export type UseProductOptions = {
    category?: string;
    queryString?: string;
}

const useProducts = (options?: UseProductOptions) => {
    const productsQuery = useQuery({
        queryFn: () => handleRequest<Product[]>("GET", "/products"),
        queryKey: [QueryKeyProducts],
        select: (products) => {
            return products.filter(p =>
                (!options?.category || p.category === options.category) &&
                (!options?.queryString ||
                    (p.title.toLowerCase().includes(options.queryString.toLowerCase()) ||
                        p.description.toLowerCase().includes(options.queryString.toLowerCase()))
                )
            );
        }
    })

    return {
        products: productsQuery.data ?? [],
        ...productsQuery
    }
}

export default useProducts;