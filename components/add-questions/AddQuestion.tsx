// Types
import { IconType } from "react-icons";

// React-Icon imports
import { RiImageAddFill } from "react-icons/ri";

// React Components imports
import Options from "./Options";
import QuestionDetails from "../question-details/QuestionDetails";
import Question from "./Question";

interface Props {
    id?: number;
    option?: string;
    preview?: boolean;
    Icon?: IconType;
}

const AddQuestion = ({ id, option, preview, Icon }: Props) => {
    return (
        <div className="space-y-8">
            <div className="rowCenter justify-between">
                <Question id={id} preview={preview} />
                <RiImageAddFill width="30px" height="50px" />
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
        </div>
    );
};

export default AddQuestion;
