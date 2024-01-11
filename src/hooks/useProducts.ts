import { useQuery } from "@tanstack/react-query";
import { handleRequest } from "./helper";

export type Product = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

export const QueryKeyProducts = "products";

const useProducts = () => {
    const productsQuery = useQuery({
        queryFn: () => handleRequest<Product[]>("GET", "/products"),
        queryKey: [QueryKeyProducts],
    })

    return {
        products: productsQuery.data ?? [],
        ...productsQuery
    }
}

export default useProducts;