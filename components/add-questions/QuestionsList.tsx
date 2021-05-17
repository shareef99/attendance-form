import { QuestionType } from "../../context/questionsContext";
import AddQuestion from "./AddQuestion";

interface Props {
    questions: Array<QuestionType>;
    preview?: boolean;
}

const QuestionsList = ({ questions, preview }: Props) => {
    return (
        <ul>
            {questions.map((question) => {
                return (
                    <li className="container" key={question.id}>
                        <AddQuestion
                            preview={preview}
                            id={question.id}
                            option={question.option}
                            optionIcon={question.optionIcon}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default QuestionsList;
