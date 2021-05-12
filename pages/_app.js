import "../styles/globals.scss";
import "../styles/tailwind.scss";
import "../styles/utils.scss";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
