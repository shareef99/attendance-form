// Types
import { IconType } from "react-icons";

// React-Icon imports
import { RiImageAddFill } from "react-icons/ri";

// React Components imports
import Options from "./Options";
import QuestionDetails from "../question-details/QuestionDetails";
import Question from "./Question";
import QuestionFooter from "./QuestionFooter";

interface Props {
    id?: number;
    option?: string;
    preview?: boolean;
    Icon?: IconType;
}

const AddQuestion = ({ id, option, preview, Icon }: Props) => {
    return (
        <div className="space-y-8">
            <div className="rowCenter justify-between flex-wrap space-x-4 space-y-4 sm:space-y-0">
                <Question id={id} preview={preview} />
                <RiImageAddFill
                    style={{ width: "1.5rem", height: "2rem" }}
                    title="Insert Image"
                />
                <Options
                    preview={preview}
                    id={id}
                    option={option}
                    Icon={Icon}
                />
            </div>
            <QuestionDetails
                id={id}
                option={option}
                Icon={Icon}
                preview={preview}
            />
            <div className="border-b-[3px]" />
            <QuestionFooter id={id} />
        </div>
    );
};

export default AddQuestion;
