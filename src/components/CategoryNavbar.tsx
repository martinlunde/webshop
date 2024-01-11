import { Link, useParams } from "react-router-dom";
import useCategories from "../hooks/useCategories";

const CategoryNavbar = () => {
    const { categoryName } = useParams();
    const { categories } = useCategories();

    return (
        <div className="bg-amber-500 w-40 min-h-screen">
            {categories.map((category) => (
                <Link
                    className={`flex text-white hover:underline ${
                        categoryName === category ? "underline" : ""
                    }`}
                    key={category}
                    to={`/products/category/${category}`}
                >
                    {category}
                </Link>
            ))}
        </div>
    );
};

export default CategoryNavbar;
