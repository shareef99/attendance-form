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
import { addNewItemAtId, questionWithId } from "../helpers/question-utils";

export interface QuestionType {
    id?: number;
    option?: string;
    optionIcon?: IconType;
    question?: string;
    optionDetails?: Array<OptionDetailsType>;
    title?: string;
    description?: string;
    shortAnswer?: string | number;
    paraAnswer?: string;
}

export interface OptionDetailsType {
    id: number;
    text: string;
}

export interface selectedQuestionType {
    id: number;
    state: boolean;
}
interface questionsContextType {
    options: Array<OptionType>;
    questions: Array<QuestionType>;
    selectedQuestion: selectedQuestionType;
    handleSetQuestions: (questions: Array<QuestionType>) => void;
    handleAddQuestions: () => void;
    updateQuestion: (id: number, question?: string) => void;
    handleDeleteQuestion: (id: number) => void;
    handleCopyQuestion: (id: number) => void;
    updateQuestionOption: (id: number, option: string, Icon: IconType) => void;
    handleUpdateOptionsDetails: (
        id: number,
        optionDetails: OptionDetailsType
    ) => void;
    handleEditOption: (
        id: number,
        optionId: number,
        editedOptionValue: string
    ) => void;
    handleAddTitleAndDescription: () => void;
    handleUpdateDescription: (id: number, description: string) => void;
    handleUpdateTitle: (id: number, title: string) => void;
    handleDeleteOptionDetail: (id: number, optionId: number) => void;
    handleAddDescription: (id: number) => void;
    handleRemoveDescription: (id: number) => void;
    handleSetSelectedQuestion: (id: number, state: boolean) => void;
}

const questionsContextDefaultValues: questionsContextType = {
    options: [],
    questions: [],
    selectedQuestion: { id: 0, state: true },
    handleSetQuestions: () => {},
    handleAddQuestions: () => {},
    updateQuestion: () => {},
    handleDeleteQuestion: () => {},
    handleCopyQuestion: () => {},
    handleUpdateOptionsDetails: () => {},
    updateQuestionOption: () => {},
    handleEditOption: () => {},
    handleAddTitleAndDescription: () => {},
    handleUpdateDescription: () => {},
    handleUpdateTitle: () => {},
    handleDeleteOptionDetail: () => {},
    handleAddDescription: () => {},
    handleRemoveDescription: () => {},
    handleSetSelectedQuestion: () => {},
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
            title: "Form Title",
        },
    ]);

    const [selectedQuestion, setSelectedQuestion] =
        useState<selectedQuestionType>({ id: 0, state: true });

    // Handler functions
    const handleSetQuestions = (questions: Array<QuestionType>) => {
        setQuestions(questions);
    };

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
        setSelectedQuestion({ id: questions[lastIndex].id + 1, state: true });
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
        if (questions.length <= 1) return;
        setQuestions(questions.filter((question) => question.id !== id));
    };

    const handleCopyQuestion = (id: number) => {
        const questionToCopy = questionWithId(questions, id);
        const index = questions?.indexOf(questionToCopy);
        const newQuestions = addNewItemAtId(questions, index, questionToCopy);
        setQuestions(newQuestions);
    };

    const updateQuestionOption = (
        id: number,
        option: string,
        Icon: IconType
    ) => {
        setQuestions(
            questions.map((question) =>
                question.id === id
                    ? { ...question, option, optionIcon: Icon }
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

    const handleAddDescription = (id: number) => {
        setQuestions(
            questions.map((question) =>
                question.id === id
                    ? { ...question, description: null }
                    : { ...question }
            )
        );
    };

    const handleRemoveDescription = (id: number) => {
        setQuestions(
            questions.map((question) =>
                question.id === id
                    ? { ...question, description: undefined }
                    : { ...question }
            )
        );
    };

    const handleSetSelectedQuestion = (id: number, state: boolean) => {
        setSelectedQuestion({ id, state });
    };

    // Others
    const value: questionsContextType = {
        options,
        questions,
        selectedQuestion,
        handleSetQuestions,
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
        handleAddDescription,
        handleRemoveDescription,
        handleSetSelectedQuestion,
    };

    return (
        <questionsContext.Provider value={value}>
            {children}
        </questionsContext.Provider>
    );
}
