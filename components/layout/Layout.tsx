import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: FC;
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
