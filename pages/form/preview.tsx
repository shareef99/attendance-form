import QuestionsList from "../../components/add-questions/QuestionsList";
import { useQuestions } from "../../context/questionsContext";
import classes from "../../styles/preview/preview.module.scss";

interface Props {}

const Preview = (props: Props) => {
    // Context
    const { questions } = useQuestions();

    // Others
    console.log(questions);

    const handleFormSubmit = () => {
        console.log("Form Submitted");
    };

    return (
        <section>
            <QuestionsList questions={questions} preview />
            <div className="container flex md:max-w-[60%]">
                <button
                    className={`${classes.submitButton} self-start -ml-8`}
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </div>
        </section>
    );
};

export default Preview;
