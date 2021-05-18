import "../styles/main.scss";
import Layout from "../components/layout/Layout";
import FormProvider from "../context/formContext";
import QuestionsProvider from "../context/questionsContext";
import OptionProvider from "../context/optionsContext";

function MyApp({ Component, pageProps }) {
    return (
        <FormProvider>
            <QuestionsProvider>
                <OptionProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </OptionProvider>
            </QuestionsProvider>
        </FormProvider>
    );
}

export default MyApp;
