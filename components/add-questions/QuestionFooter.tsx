import { MdDelete } from "react-icons/md";
import { useQuestions } from "../../context/questionsContext";

interface Props {
    id: number;
}

const QuestionFooter = ({ id }: Props) => {
    const { handleDeleteQuestion } = useQuestions();

    return (
        <div className="flex justify-end">
            <MdDelete
                style={{ width: "1.5rem", height: "2rem", cursor: "pointer" }}
                className="text-gray-500"
                title="Delete Question"
                onClick={() => {
                    handleDeleteQuestion(id);
                }}
            />
        </div>
    );
};

export default QuestionFooter;
