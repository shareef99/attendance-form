import { createContext, ReactNode, useContext, useState } from "react";
import AddQuestion from "../components/add-questions/AddQuestion";

type formContextType = {
    questions: Array<ReactNode>;
    handleAddQuestions: Function;
    formTitle: string;
    handleFormTitle: (title: string) => void;
};

const formContextDefaultValues: formContextType = {
    questions: [],
    handleAddQuestions: function () {},
    formTitle: "Untitled",
    handleFormTitle: () => {},
};

const FormContext = createContext<formContextType>(formContextDefaultValues);

export function useFormContext() {
    return useContext(FormContext);
}

type Props = {
    children: ReactNode;
};

export default function FormProvider({ children }: Props) {
    // state
    const [questions, setQuestions] = useState<Array<ReactNode>>([]);
    const [formTitle, setFormTitle] = useState<string>("Untitled");

    // Handler functions
    function handleAddQuestions() {
        setQuestions((prevQuestions) => [...prevQuestions, <AddQuestion />]);
    }

    const handleFormTitle = (title: string) => {
        setFormTitle(title);
    };

    // Others
    const value: formContextType = {
        questions,
        handleAddQuestions,
        formTitle,
        handleFormTitle,
    };

    return (
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
    );
}
