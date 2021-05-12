import "../styles/main.scss";
import Layout from "../components/layout/Layout";
import FormProvider from "../context/formContext";

function MyApp({ Component, pageProps }) {
    return (
        <FormProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </FormProvider>
    );
}

export default MyApp;
