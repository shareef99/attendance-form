// React imports
import { useState } from "react";

// Types
import { IconType } from "react-icons";

// React-Icon imports
import { RiImageAddFill } from "react-icons/ri";
import { useQuestions } from "../../context/questionsContext";

// React Components imports
import Options, { OptionType } from "./Options";
import QuestionDetails from "../question-details/QuestionDetails";
import Question from "./Question";

interface Props {
    id?: number;
    option?: string;
    optionIcon?: IconType;
    preview?: boolean;
    Icon?: IconType;
}

const AddQuestion = ({ id, option, optionIcon, preview, Icon }: Props) => {
    //Context
    const { options } = useQuestions();

    // State
    const [selectedOption, setSelectedOption] = useState<OptionType>(
        options[0]
    );

    // Handlers
    const handleSetSelectedOption = (option: OptionType) => {
        setSelectedOption(option);
    };

    return (
        <div className="p-8 space-y-8">
            <div className="rowCenter justify-around">
                <Question
                    id={id}
                    option={option}
                    optionIcon={optionIcon}
                    preview={preview}
                />
                <RiImageAddFill width="30px" height="50px" />
                <Options
                    preview={preview}
                    id={id}
                    option={option}
                    Icon={Icon}
                    selectedOption={selectedOption}
                    onSetSelectedOption={handleSetSelectedOption}
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
