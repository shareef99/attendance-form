import { ReactElement } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: ReactElement;
}

const Layout = ({ children }: Props) => {
    const PageName = useRouter().asPath.slice(6);

    return (
        <div>
            <Header PageName={PageName} />
            <main>{children}</main>
            <Footer PageName={PageName} />
        </div>
    );
};

export default Layout;
