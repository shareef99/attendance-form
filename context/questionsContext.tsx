import { createContext, ReactNode, useContext, useState } from "react";
import { OptionType } from "../components/add-questions/Options";

// React-Icon imports
import {
    MdShortText,
    MdArrowDropDownCircle,
    MdDateRange,
    MdAccessTime,
} from "react-icons/md";
import { ImParagraphLeft, ImCheckboxChecked } from "react-icons/im";
import { CgRadioChecked } from "react-icons/cg";
import { ChoiceType } from "../components/question-details/option-details/MultipleChoice";

interface questionsContextType {
    options: Array<OptionType>;
    multipleChoice: Array<ChoiceType>;
    handleMultipleChoice: (choices: Array<ChoiceType>) => void;
}

const questionsContextDefaultValues: questionsContextType = {
    options: [],
    multipleChoice: [],
    handleMultipleChoice: () => {},
};

const questionsContext = createContext<questionsContextType>(
    questionsContextDefaultValues
);

export function useQuestions() {
    return useContext(questionsContext);
}

interface Props {
    children: ReactNode;
}

export default function QuestionsProvider({ children }: Props) {
    // Constants
    const options: Array<OptionType> = [
        {
            Icon: MdShortText,
            option: "Short answer",
        },
        {
            Icon: ImParagraphLeft,
            option: "Paragraph",
        },
        {
            Icon: ImCheckboxChecked,
            option: "Multiple choice",
        },
        {
            Icon: CgRadioChecked,
            option: "Checkboxes",
        },
        {
            Icon: MdArrowDropDownCircle,
            option: "Dropdown",
        },
    ];

    // state
    const [multipleChoice, setMultipleChoice] = useState<Array<ChoiceType>>([
        { id: "Default", text: "option 1" },
    ]);

    // Handler functions
    const handleMultipleChoice = (choices: Array<ChoiceType>) => {
        setMultipleChoice(choices);
    };

    // Others
    const value: questionsContextType = {
        options,
        multipleChoice,
        handleMultipleChoice,
    };

    return (
        <questionsContext.Provider value={value}>
            {children}
        </questionsContext.Provider>
    );
}
