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
    id?: number;
    option?: string;
    optionIcon?: IconType;
    question?: string;
    optionDetails?: Array<OptionDetailsType>;
    title?: string;
    description?: string;
}

interface questionsContextType {
    questions: Array<QuestionType>;
    handleAddQuestions: () => void;
    updateQuestion: (id: number, question?: string) => void;
    handleDeleteQuestion: (id: number) => void;
    handleCopyQuestion: (id: number) => void;
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
    handleAddTitleAndDescription: () => void;
    handleUpdateDescription: (id: number, description: string) => void;
    handleUpdateTitle: (id: number, title: string) => void;
    handleDeleteOptionDetail: (id: number, optionId: number) => void;
}

const questionsContextDefaultValues: questionsContextType = {
    questions: [],
    handleAddQuestions: () => {},
    updateQuestion: () => {},
    handleDeleteQuestion: () => {},
    handleCopyQuestion: () => {},
    options: [],
    handleUpdateOptionsDetails: () => {},
    updateQuestionOption: () => {},
    handleEditOption: () => {},
    handleAddTitleAndDescription: () => {},
    handleUpdateDescription: () => {},
    handleUpdateTitle: () => {},
    handleDeleteOptionDetail: () => {},
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
    const handleAddQuestions = () => {
        const lastIndex = questions.length - 1;
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            {
                id: questions[lastIndex].id + 1,
                option: "Short answer",
                optionIcon: MdShortText,
                question: null,
                optionDetails: [{ id: 1, text: "option 1" }],
            },
        ]);
    };

    const updateQuestion = (id: number, questionText: string) => {
        setQuestions(
            questions.map((question) =>
                question.id === id
                    ? {
                          ...question,
                          question: questionText,
                      }
                    : { ...question }
            )
        );
    };

    const handleDeleteQuestion = (id: number) => {
        if (questions.length <= 1) {
            return;
        }
        setQuestions(questions.filter((question) => question.id !== id));
    };

    const handleCopyQuestion = (id: number) => {
        const lastIndex = questions.length - 1;
        questions.splice(id + 1, 0, {
            ...questions[id],
            id: questions[lastIndex].id + 1,
            optionDetails: questions[id].optionDetails,
        });
        console.log(questions);
        setQuestions(questions);
    };

    const updateQuestionOption = (id: number, option: string) => {
        console.log("para ID: ", id, " Deleting ID: ", questions[id].id);

        setQuestions(
            questions.map((question) =>
                question.id === id ? { ...question, option } : { ...question }
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

    const handleDeleteOptionDetail = (id: number, optionId: number) => {
        setQuestions(
            questions.map((question) =>
                question.id === id
                    ? {
                          ...question,
                          optionDetails: question.optionDetails.filter(
                              (optionDetail) => optionDetail.id !== optionId
                          ),
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

    const handleAddTitleAndDescription = () => {
        const largestId = questions.sort((a, b) => a.id - b.id)[
            questions.length - 1
        ].id;
        setQuestions((prevQuestions) => [
            ...prevQuestions,
            {
                id: largestId + 1,
                title: "Untitled Title",
                description: null,
            },
        ]);
    };

    const handleUpdateTitle = (id: number, title: string) => {
        setQuestions(
            questions.map((question) =>
                question.id === id ? { ...question, title } : { ...question }
            )
        );
    };

    const handleUpdateDescription = (id: number, description: string) => {
        setQuestions(
            questions.map((question) =>
                question.id === id
                    ? { ...question, description }
                    : { ...question }
            )
        );
    };

    // Others
    const value: questionsContextType = {
        questions,
        options,
        handleAddQuestions,
        updateQuestion,
        handleDeleteQuestion,
        handleCopyQuestion,
        handleUpdateOptionsDetails,
        updateQuestionOption,
        handleEditOption,
        handleDeleteOptionDetail,
        handleAddTitleAndDescription,
        handleUpdateTitle,
        handleUpdateDescription,
    };

    return (
        <questionsContext.Provider value={value}>
            {children}
        </questionsContext.Provider>
    );
}
