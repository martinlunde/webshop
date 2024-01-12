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
        <header className="flex h-24 bg-green-600">
            <div className="flex items-center text-5xl text-white px-8 mr-16">
                W
            </div>
            <nav className="flex items-center">
                <NavLink to={"/products"} title="Home" />
            </nav>
        </header>
    );
};

export default Header;
