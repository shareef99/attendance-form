import { QuestionType } from "../../context/questionsContext";
import AddQuestion from "./AddQuestion";

interface Props {
    questions: Array<QuestionType>;
}

const QuestionsList = ({ questions }: Props) => {
    return (
        <ul>
            {questions.map((question) => {
                return (
                    <li className="container" key={question.id}>
                        <AddQuestion
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
