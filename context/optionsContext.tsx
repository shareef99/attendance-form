import { createContext, ReactNode, useContext, useState } from "react";
import { useQuestions } from "./questionsContext";

type optionsContextType = {};

const optionsContextDefaultValues: optionsContextType = {};

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
    const { questions, handleUpdateOptionsDetails } = useQuestions();

    // state

    // Handler functions

    // Others
    const value: optionsContextType = {};

    return (
        <OptionContext.Provider value={value}>
            {children}
        </OptionContext.Provider>
    );
}
