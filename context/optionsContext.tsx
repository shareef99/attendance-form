import { createContext, ReactNode, useContext, useState } from "react";
import { useQuestions } from "./questionsContext";

type optionsContextType = {
    handleShortAnswer: (id: number, answer: string | number) => void;
    handleParaAnswer: (id: number, answer: string) => void;
    handleMultiAnswer: (id: number, answer: string) => void;
};

const optionsContextDefaultValues: optionsContextType = {
    handleShortAnswer: () => {},
    handleParaAnswer: () => {},
    handleMultiAnswer: () => {},
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
    const handleShortAnswer = (id: number, answer: string | number) => {
        handleSetQuestions(
            questions.map((question) =>
                question.id === id
                    ? { ...question, shortAnswer: answer }
                    : { ...question }
            )
        );
    };

    const handleParaAnswer = (id: number, answer: string) => {
        handleSetQuestions(
            questions.map((question) =>
                question.id === id
                    ? { ...question, paraAnswer: answer }
                    : { ...question }
            )
        );
    };

    const handleMultiAnswer = (id: number, answer: string) => {
        handleSetQuestions(
            questions.map((question) =>
                question.id === id
                    ? { ...question, multiAnswer: answer }
                    : { ...question }
            )
        );
    };

    // Others
    const value: optionsContextType = {
        handleShortAnswer,
        handleParaAnswer,
        handleMultiAnswer,
    };

    return (
        <OptionContext.Provider value={value}>
            {children}
        </OptionContext.Provider>
    );
}
