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
}

const AddQuestion = ({ id, option, optionIcon }: Props) => {
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
                <Question id={id} option={option} optionIcon={optionIcon} />
                <RiImageAddFill width="30px" height="50px" />
                <Options
                    id={id}
                    option={option}
                    selectedOption={selectedOption}
                    onSetSelectedOption={handleSetSelectedOption}
                />
            </div>
            <QuestionDetails selectedOption={selectedOption} />
        </div>
    );
};

export default AddQuestion;
