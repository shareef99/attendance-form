import { createContext, ReactNode, useContext, useState } from "react";
import AddQuestion from "../components/add-questions/AddQuestion";

type formContextType = {
    questions: Array<ReactNode>;
    handleAddQuestions: Function;
};

const formContextDefaultValues: formContextType = {
    questions: [],
    handleAddQuestions: function () {},
};

const FormContext = createContext<formContextType>(formContextDefaultValues);

export function useForm() {
    return useContext(FormContext);
}

type Props = {
    children: ReactNode;
};

export default function FormProvider({ children }: Props) {
    // state
    const [questions, setQuestions] = useState<Array<ReactNode>>([]);

    // Handler functions
    function handleAddQuestions() {
        setQuestions((prevQuestions) => [...prevQuestions, <AddQuestion />]);
    }

    const value: formContextType = {
        questions,
        handleAddQuestions,
    };
    return (
        <>
            <FormContext.Provider value={value}>
                {children}
            </FormContext.Provider>
        </>
    );
}
