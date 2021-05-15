import { QuestionType } from "../../context/formContext";
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
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default QuestionsList;
