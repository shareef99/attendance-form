import Link from "next/link";
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

        // const isAllAnswerExits = questionsWithRequired.every(
        //     (x) => Boolean(x.answer) === true
        // );

        // const whichAnswersAreEmpty = questionsWithRequired.filter(
        //     (x) => Boolean(x.answer) === false
        // );

        const idsOfIncorrectAnswers = questionsWithRequired
            .filter((x) => Boolean(x.answer) === false)
            .map((x) => x.id);

        const addingErrorMessages = () => {
            handleSetQuestions(
                questions.map((question) =>
                    idsOfIncorrectAnswers.includes(question.id)
                        ? {
                              ...question,
                              errorMessage: "This is a required question",
                          }
                        : { ...question }
                )
            );
        };

        addingErrorMessages();

        // console.log(
        //     questionsWithRequired,
        //     isAllAnswerExits,
        //     whichAnswersAreEmpty,
        //     idsOfIncorrectAnswers
        // );
    };

    return (
        <section className="my-14">
            {questions.length > 2 ? (
                <>
                    <QuestionsList questions={questions} preview />
                    <div className="container flex md:max-w-[70%]">
                        <button
                            className={`${classes.submitButton} self-start -ml-8`}
                            onClick={handleFormSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </>
            ) : (
                <div className="colCenter">
                    <span className="text-red-400 font-medium text-lg">
                        Failed to save your form
                    </span>
                    <div
                        className="font-medium text-lg underline hover:no-underline focus:no-underline"
                        style={{ marginTop: "100px" }}
                    >
                        <Link href="/form/new">Start a new form</Link>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Preview;
