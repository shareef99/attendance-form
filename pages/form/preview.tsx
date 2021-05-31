import { useEffect } from "react";
import QuestionsList from "../../components/add-questions/QuestionsList";
import { useQuestions } from "../../context/questionsContext";
import classes from "../../styles/preview/preview.module.scss";

interface Props {}

const Preview = (props: Props) => {
    // Context
    const { questions, handleSetQuestions } = useQuestions();

    // Others
    console.log(questions);

    const handleFormSubmit = () => {
        const questionsWithRequired = questions.filter(
            (question) => question.isRequired
        );

        const isAllAnswerExits = questionsWithRequired.every(
            (x) => Boolean(x.answer) === true
        );

        const whichAnswersAreEmpty = questionsWithRequired.filter(
            (x) => Boolean(x.answer) === false
        );

        const idsOfIncorrectAnswers = questionsWithRequired
            .filter((x) => Boolean(x.answer) === false)
            .map((x) => x.id);

        const addingErrorMessages = () => {
            handleSetQuestions(
                questions.map((question) =>
                    idsOfIncorrectAnswers.includes(question.id)
                        ? { ...question, errorMessage: "Error" }
                        : { ...question }
                )
            );
        };

        addingErrorMessages();

        console.log(
            questionsWithRequired,
            isAllAnswerExits,
            whichAnswersAreEmpty,
            idsOfIncorrectAnswers
        );
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
