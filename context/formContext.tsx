import { createContext, ReactNode, useContext, useState } from "react";
import { IconType } from "react-icons/lib";
import { MdShortText } from "react-icons/md";

type formContextType = {
    questions: Array<QuestionType>;
    handleAddQuestions: Function;
    formTitle: string;
    handleFormTitle: (title: string) => void;
    updateQuestion: (id: number, option: string, optionIcon: IconType) => void;
};

const formContextDefaultValues: formContextType = {
    questions: [],
    handleAddQuestions: function () {},
    formTitle: null,
    handleFormTitle: () => {},
    updateQuestion: () => {},
};

const FormContext = createContext<formContextType>(formContextDefaultValues);

export function useFormContext() {
    return useContext(FormContext);
}

type Props = {
    children: ReactNode;
};

export interface QuestionType {
    id: number;
    option: string;
    optionIcon: IconType;
}

export default function FormProvider({ children }: Props) {
    // state
    const [questions, setQuestions] = useState<Array<QuestionType>>([
        { id: 0, option: "Short answer", optionIcon: MdShortText },
    ]);
    const [formTitle, setFormTitle] = useState<string>();

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

    const handleFormTitle = (title: string) => {
        setFormTitle(title);
    };

    // Others
    const value: formContextType = {
        questions,
        handleAddQuestions,
        formTitle,
        handleFormTitle,
        updateQuestion,
    };

    return (
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
    );
}
