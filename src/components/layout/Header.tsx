import { Link, useLocation } from "react-router-dom";

const NavLink = ({ title, to }: { title: string; to: string }) => {
    const { pathname } = useLocation();

    return (
        <Link
            className={`text-white ${pathname === to ? "underline" : ""}`}
            to={to}
        >
            {title}
        </Link>
    );
};

const Header = () => {
    return (
        <header>
            <nav className="flex items-center h-24 bg-blue-500 p-4">
                <NavLink to={"/products"} title="Produkter" />
            </nav>
        </header>
    );
};

export default Header;
