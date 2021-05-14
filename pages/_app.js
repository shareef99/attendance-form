import "../styles/main.scss";
import Layout from "../components/layout/Layout";
import FormProvider from "../context/formContext";
import QuestionsProvider from "../context/questionsContext";

function MyApp({ Component, pageProps }) {
    return (
        <FormProvider>
            <QuestionsProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </QuestionsProvider>
        </FormProvider>
    );
}

export default MyApp;
