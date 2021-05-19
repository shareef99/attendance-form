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
import { IconType } from "react-icons/lib";

export interface OptionDetailsType {
    id: number;
    text: string;
}
export interface QuestionType {
    id: number;
    option: string;
    optionIcon: IconType;
    question: string;
    optionDetails: Array<OptionDetailsType>;
}

interface questionsContextType {
    questions: Array<QuestionType>;
    handleAddQuestions: Function;
    updateQuestion: (
        id: number,
        option: string,
        optionIcon: IconType,
        question?: string
    ) => void;
    options: Array<OptionType>;
    handleUpdateOptionsDetails: (
        id: number,
        optionDetails: OptionDetailsType
    ) => void;
    updateQuestionOption: (id: number, option: string) => void;
    handleEditOption: (
        id: number,
        optionId: number,
        editedOptionValue: string
    ) => void;
}

const questionsContextDefaultValues: questionsContextType = {
    questions: [],
    handleAddQuestions: function () {},
    updateQuestion: () => {},
    options: [],
    handleUpdateOptionsDetails: () => {},
    updateQuestionOption: () => {},
    handleEditOption: () => {},
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

    // States
    const [questions, setQuestions] = useState<Array<QuestionType>>([
        {
            id: 0,
            option: "Short answer",
            optionIcon: MdShortText,
            question: null,
            optionDetails: [{ id: 1, text: "option 1" }],
        },
    ]);

    // Handler functions
    function handleAddQuestions() {
        const lastIndex = questions.length - 1;
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            {
                id: prevQuestions[lastIndex].id + 1,
                option: "Short answer",
                optionIcon: MdShortText,
                question: null,
                optionDetails: [{ id: 1, text: "option 1" }],
            },
        ]);
    }

    const updateQuestionOption = (id: number, option: string) => {
        setQuestions(
            questions.map((question) =>
                question.id === id ? { ...question, option } : { ...question }
            )
        );
    };

    const updateQuestion = (
        id: number,
        option: string,
        optionIcon: IconType,
        questionText: string
    ) => {
        setQuestions(
            questions.map((question) =>
                question.id === id
                    ? {
                          ...question,
                          option,
                          optionIcon,
                          question: questionText,
                      }
                    : { ...question }
            )
        );
    };

    const handleUpdateOptionsDetails = (
        id: number,
        optionDetail: OptionDetailsType
    ) => {
        setQuestions(
            questions.map((question) =>
                question.id === id
                    ? {
                          ...question,
                          optionDetails: [
                              ...question.optionDetails,
                              optionDetail,
                          ],
                      }
                    : { ...question }
            )
        );
    };

    const handleEditOption = (
        id: number,
        optionId: number,
        optionText: string
    ) => {
        setQuestions(
            questions.map((question) =>
                question.id === id
                    ? {
                          ...question,
                          optionDetails: question.optionDetails.map((x) =>
                              x.id === optionId
                                  ? { ...x, text: optionText }
                                  : { ...x }
                          ),
                      }
                    : { ...question }
            )
        );
    };

    // Others
    const value: questionsContextType = {
        questions,
        handleAddQuestions,
        updateQuestion,
        options,
        handleUpdateOptionsDetails,
        updateQuestionOption,
        handleEditOption,
    };

    return (
        <questionsContext.Provider value={value}>
            {children}
        </questionsContext.Provider>
    );
}
