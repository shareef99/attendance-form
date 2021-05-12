import { createContext, ReactElement, useContext, useState } from "react";
import AddQuestion from "../components/add-questions/AddQuestion";

type formContextType = {
    questions: Array<ReactElement>;
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
    children: ReactElement;
};

export default function FormProvider({ children }: Props) {
    // state
    const [questions, setQuestions] = useState<Array<ReactElement>>([]);

    function handleAddQuestions() {
        console.log("working");
        console.log(questions);
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
