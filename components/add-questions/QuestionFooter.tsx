import { MdDelete, MdContentCopy } from "react-icons/md";
import { useQuestions } from "../../context/questionsContext";

interface Props {
    id: number;
}

const QuestionFooter = ({ id }: Props) => {
    const { handleDeleteQuestion, handleCopyQuestion } = useQuestions();

    return (
        <div className="flex justify-end space-x-4">
            <MdContentCopy
                style={{ width: "1.5rem", height: "2rem", cursor: "pointer" }}
                className="text-gray-500"
                title="Copy Question"
                onClick={() => handleCopyQuestion(id)}
            />
            <MdDelete
                style={{ width: "1.5rem", height: "2rem", cursor: "pointer" }}
                className="text-gray-500"
                title="Delete Question"
                onClick={() => handleDeleteQuestion(id)}
            />
        </div>
    );
};

export default QuestionFooter;
