import { useQuery } from "@tanstack/react-query";
import { handleRequest } from "./helper";

export const QueryKeyCategories = "categories";

const useCategories = () => {
    const categoriesQuery = useQuery({
        queryFn: () => handleRequest<string[]>("GET", "/products/categories"),
        queryKey: [QueryKeyCategories],
    })

    return {
        categories: categoriesQuery.data ?? [],
        ...categoriesQuery
    }
}

export default useCategories;