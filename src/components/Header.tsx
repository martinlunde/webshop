import { Link, useLocation } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

const NavLink = ({ title, to }: { title: string; to: string }) => {
    const { pathname } = useLocation();

    return (
        <Link
            className={`text-white hover:underline ${
                pathname === to ? "underline" : ""
            }`}
            to={to}
        >
            {title}
        </Link>
    );
};

const Header = () => {
    return (
        <header className="flex h-24 bg-anzac-400">
            <Link
                className="flex items-center text-5xl text-white px-8 mr-16"
                to={"/"}
            >
                W
            </Link>
            <nav className="flex items-center">
                <NavLink to={"/products"} title="Home" />
            </nav>
            <div className="flex items-center absolute h-24 right-0 px-8">
                <ShoppingCart />
            </div>
        </header>
    );
};

export default Header;
