import { ReactElement } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
    children: ReactElement;
}

const Layout = ({ children }: Props) => {
    // type.name exist but I don't know why TS is not getting it, so I am using TS ignore comment
    // @ts-ignore
    const PageName = children.type.name;
    return (
        <div>
            <Header PageName={PageName} />
            <main>{children}</main>
            <Footer PageName={PageName} />
        </div>
    );
};

export default Layout;
