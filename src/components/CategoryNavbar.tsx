import { Link, useParams } from "react-router-dom";
import useCategories from "../hooks/useCategories";

const CategoryNavbar = () => {
    const { categoryName } = useParams();
    const { categories } = useCategories();

    return (
        <div className="bg-anzac-700 opacity-70 md:min-h-screen md:min-w-40">
            <nav className="p-6">
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
            </nav>
        </div>
    );
};

export default CategoryNavbar;
