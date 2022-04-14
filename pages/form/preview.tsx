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
      <QuestionsList questions={questions} preview />
      <div className="container flex md:max-w-[70%] space-x-2">
        <button
          className={`${classes.submitButton} self-start -ml-8`}
          onClick={handleFormSubmit}
        >
          Submit
        </button>
        <Link href="/form/new">
          <a className="self-start">
            <button className={`${classes.editButton}`}>Edit</button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Preview;
