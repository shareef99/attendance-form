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
            <QuestionsList questions={questions} />
        </section>
    );
};

export default NewForm;
