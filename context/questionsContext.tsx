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
import { IconType } from "react-icons/lib";
// import { QuestionType } from "./formContext";

export interface QuestionType {
    id: number;
    option: string;
    optionIcon: IconType;
}

interface questionsContextType {
    questions: Array<QuestionType>;
    handleAddQuestions: Function;
    updateQuestion: (id: number, option: string, optionIcon: IconType) => void;
    options: Array<OptionType>;
    multipleChoice: Array<ChoiceType>;
    handleMultipleChoice: (choices: Array<ChoiceType>) => void;
}

const questionsContextDefaultValues: questionsContextType = {
    questions: [],
    handleAddQuestions: function () {},
    updateQuestion: () => {},
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

    //
    const [questions, setQuestions] = useState<Array<QuestionType>>([
        { id: 0, option: "Short answer", optionIcon: MdShortText },
    ]);
    const [multipleChoice, setMultipleChoice] = useState<Array<ChoiceType>>([
        { id: "Default", text: "option 1" },
    ]);

    // Handler functions
    function handleAddQuestions() {
        const numberOfQuestions = questions.length;
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            {
                id: prevQuestions[numberOfQuestions - 1].id + 1,
                option: "Short answer",
                optionIcon: MdShortText,
            },
        ]);
    }

    const updateQuestion = (
        id: number,
        option: string,
        optionIcon: IconType
    ) => {
        setQuestions(
            questions.map((question) =>
                question.id === id
                    ? { ...question, option, optionIcon }
                    : { ...question }
            )
        );
    };

    const handleMultipleChoice = (choices: Array<ChoiceType>) => {
        setMultipleChoice(choices);
    };

    // Others
    const value: questionsContextType = {
        questions,
        handleAddQuestions,
        updateQuestion,
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
