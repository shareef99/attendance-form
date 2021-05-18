import QuestionsList from "../../components/add-questions/QuestionsList";
import { useQuestions } from "../../context/questionsContext";

interface Props {}

const Preview = (props: Props) => {
    // Context
    const { questions } = useQuestions();

    // Others
    console.log(questions);

    return (
        <div>
            <QuestionsList questions={questions} preview />
        </div>
    );
};

export default Preview;
