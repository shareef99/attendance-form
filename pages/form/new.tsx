import Link from "next/link";
import QuestionsList from "../../components/add-questions/QuestionsList";
import { useQuestions } from "../../context/questionsContext";

interface Props {}

const NewForm = ({}: Props) => {
    // Context
    const { questions } = useQuestions();

    // Others
    console.log(questions);

    return (
        <section>
            <h1>New Form</h1>
            <QuestionsList questions={questions} />
            <button>
                <Link href="/">Back to home</Link>
            </button>
        </section>
    );
};

export default NewForm;
