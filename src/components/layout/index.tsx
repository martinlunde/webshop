import { Outlet } from "react-router-dom";
import Header from "./Header";

const WebshopLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default WebshopLayout;
