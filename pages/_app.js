import "../styles/main.scss";
import Layout from "../components/layout/Layout";
import FormProvider from "../context/formContext";
import QuestionsProvider from "../context/questionsContext";
import AnswerProvider from "../context/answerContext";

function MyApp({ Component, pageProps }) {
    return (
        <FormProvider>
            <QuestionsProvider>
                <AnswerProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AnswerProvider>
            </QuestionsProvider>
        </FormProvider>
    );
}

export default MyApp;
