import ShortAnswer from "./option-details/ShortAnswer";
import Paragraph from "./option-details/Paragraph";
import MCD from "./option-details/MCD";
import { useQuestions } from "../../context/questionsContext";
import { questionWithId } from "../../helpers/question-utils";

interface Props {
    docId: string;
    id: number;
    option: string;
    preview: boolean;
}

const QuestionDetails = ({ docId, id, preview, option }: Props) => {
    const { questions, handleClearAnswer } = useQuestions();

    // Constants
    const optionDetails = questionWithId(questions, id)?.optionDetails;
    const answer = questionWithId(questions, id)?.answer;

    if (option === "Short answer") {
        return (
            <div className="sm:w-[70%] md:w-[60%]">
                <ShortAnswer
                    id={id}
                    preview={preview}
                    answer={answer as string | number}
                />
            </div>
        );
    }

    if (option === "Paragraph") {
        return (
            <div>
                <Paragraph
                    id={id}
                    preview={preview}
                    answer={answer as string}
                />
            </div>
        );
    }

    if (
        option === "Multiple choice" ||
        option === "Checkboxes" ||
        option === "Dropdown"
    ) {
        // MCD stands for multi choice, Checkboxes, DropDown
        return (
            <>
                <MCD
                    docId={docId}
                    id={id}
                    preview={preview}
                    option={option}
                    optionDetails={optionDetails}
                    answer={answer as string | Array<string>}
                />
                {preview && Boolean(questionWithId(questions, id).answer) && (
                    <button
                        className="text-lg font-medium transform transition duration-500 ease-in"
                        onClick={() => handleClearAnswer(id)}
                    >
                        Clear
                    </button>
                )}
            </>
        );
    }

    return <></>;
};

export default QuestionDetails;
