// Types
import { IconType } from "react-icons";
// React-Icon imports
import { RiImageAddFill } from "react-icons/ri";
// React Components imports
import Options from "./Options";
import QuestionDetails from "../question-details/QuestionDetails";
import Question from "./Question";
import QuestionFooter from "./QuestionFooter";
import Description from "./Description";
// Helper functions
import { isSelected } from "../../helpers/question-utils";
// Context
import { useQuestions } from "../../context/questionsContext";

interface Props {
    id: number;
    option: string;
    preview: boolean;
    Icon: IconType;
    isDescription: boolean;
    description: string;
    errorMessage: string;
}

const AddQuestion = (props: Props) => {
    const {
        id,
        option,
        preview,
        Icon,
        description,
        isDescription,
        errorMessage,
    } = props;
    const { selectedQuestion } = useQuestions();

    return (
        <div
            className={`${
                isSelected(selectedQuestion.id, id) ? "space-y-8" : "space-y-4"
            }`}
        >
            <div className="rowCenter justify-between items-baseline flex-wrap space-x-4 space-y-4">
                <Question id={id} preview={preview} />
                {isSelected(selectedQuestion.id, id) && (
                    <Options
                        preview={preview}
                        id={id}
                        option={option}
                        Icon={Icon}
                    />
                )}
            </div>
            {preview
                ? Boolean(description) && <h3>{description}</h3>
                : isDescription && (
                      <Description
                          id={id}
                          preview={preview}
                          description={description}
                      />
                  )}
            <QuestionDetails id={id} option={option} preview={preview} />
            {preview && Boolean(errorMessage) && (
                <h3 className="my-4 text-red-500 font-normal text">
                    {errorMessage}
                </h3>
            )}
            {isSelected(selectedQuestion.id, id) && (
                <>
                    <div className="border-b-[3px]" />
                    <QuestionFooter id={id} />
                </>
            )}
        </div>
    );
};

export default AddQuestion;
