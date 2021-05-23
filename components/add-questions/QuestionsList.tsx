import { QuestionType } from "../../context/questionsContext";
import AddQuestion from "./AddQuestion";
import TitleNDescription from "./TitleNDescription";

interface Props {
    questions: Array<QuestionType>;
    preview?: boolean;
}

const QuestionsList = ({ questions, preview }: Props) => {
    return (
        <ul>
            {questions.map((question) => {
                if (question.title || question.description) {
                    return (
                        <li className="container p-8 colCenter items-start space-y-8">
                            <TitleNDescription
                                id={question.id}
                                preview={preview}
                                title={question.title}
                                description={question.description}
                            />
                        </li>
                    );
                }
                return (
                    <li className="container p-8" key={question.id}>
                        <AddQuestion
                            preview={preview}
                            id={question.id}
                            option={question.option}
                            Icon={question.optionIcon}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default QuestionsList;
