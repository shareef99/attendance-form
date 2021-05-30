import { createContext, ReactNode, useContext, useState } from "react";
import { useQuestions } from "./questionsContext";

type optionsContextType = {
    handleSubmitAnswer: (
        id: number,
        answer: string | number | Array<string>
    ) => void;
};

const optionsContextDefaultValues: optionsContextType = {
    handleSubmitAnswer: () => {},
};

const OptionContext = createContext<optionsContextType>(
    optionsContextDefaultValues
);

export function useOptions() {
    return useContext(OptionContext);
}

interface Props {
    children: ReactNode;
}

export default function OptionProvider({ children }: Props) {
    // Context
    const { questions, handleSetQuestions } = useQuestions();

    // state

    // Handler functions
    const handleSubmitAnswer = (
        id: number,
        answer: string | number | Array<string>
    ) => {
        handleSetQuestions(
            questions.map((question) =>
                question.id === id ? { ...question, answer } : { ...question }
            )
        );
    };

    // Others
    const value: optionsContextType = {
        handleSubmitAnswer,
    };

    return (
        <OptionContext.Provider value={value}>
            {children}
        </OptionContext.Provider>
    );
}
