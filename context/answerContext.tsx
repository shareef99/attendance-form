import { createContext, ReactNode, useContext } from "react";
import { useQuestions } from "./questionsContext";

type answerContextType = {
    handleSubmitAnswer: (
        id: number,
        answer: string | number | Array<string>
    ) => void;
};

const answerContextDefaultValues: answerContextType = {
    handleSubmitAnswer: () => {},
};

const answerContext = createContext<answerContextType>(
    answerContextDefaultValues
);

export function useAnswer() {
    return useContext(answerContext);
}

interface Props {
    children: ReactNode;
}

export default function AnswerProvider({ children }: Props) {
    // Context
    const { questions, handleSetQuestions } = useQuestions();

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
    const value: answerContextType = {
        handleSubmitAnswer,
    };

    return (
        <answerContext.Provider value={value}>
            {children}
        </answerContext.Provider>
    );
}
