// Material-Ui import(s)
import TextField from "@material-ui/core/TextField";

// React imports
import { useState } from "react";

// React-Icon imports
import { RiImageAddFill } from "react-icons/ri";
import { useQuestions } from "../../context/questionsContext";
import QuestionDetails from "../question-details/QuestionDetails";

// React Components imports
import Options, { OptionType } from "./Options";

interface Props {
    id?: number;
    option?: string;
}

const AddQuestion = ({ id, option }: Props) => {
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
        <div className="p-8">
            <form action="" className="rowCenter space-x-4">
                <TextField variant="filled" placeholder="Question" />
                <RiImageAddFill width="30px" height="50px" />
                <Options
                    id={id}
                    option={option}
                    selectedOption={selectedOption}
                    onSetSelectedOption={handleSetSelectedOption}
                />
            </form>
            <QuestionDetails selectedOption={selectedOption} />
        </div>
    );
};

export default AddQuestion;
