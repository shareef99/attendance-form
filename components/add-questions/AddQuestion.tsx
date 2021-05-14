// Material-Ui import(s)
import TextField from "@material-ui/core/TextField";

// React imports
import { useState } from "react";

// React-Icon imports
import { RiImageAddFill } from "react-icons/ri";
import { useQuestions } from "../../context/questionsContext";
import QuestionDetails from "../option-details/QuestionDetails";

// React Components imports
import Options, { OptionListItem } from "./Options";

interface Props {}

const AddQuestion = ({}: Props) => {
    //Context
    const { options } = useQuestions();

    // State
    const [selectedOption, setSelectedOption] = useState<OptionListItem>(
        options[0]
    );

    // Handlers
    const handleSetSelectedOption = (option: OptionListItem) => {
        setSelectedOption(option);
    };

    return (
        <div className="p-8">
            <form action="" className="rowCenter space-x-4">
                <TextField
                    id="question"
                    variant="filled"
                    placeholder="Question"
                />
                <RiImageAddFill width="30px" height="50px" />
                <Options
                    selectedOption={selectedOption}
                    onSetSelectedOption={handleSetSelectedOption}
                />
            </form>
            <QuestionDetails selectedOption={selectedOption} />
        </div>
    );
};

export default AddQuestion;
