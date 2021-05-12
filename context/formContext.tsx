import { createContext, ReactElement, useContext } from "react";

type formContextType = {
    question: boolean;
};

const formContextDefaultValues: formContextType = {
    question: false,
};

const FormContext = createContext<formContextType>(formContextDefaultValues);

export function useForm() {
    return useContext(FormContext);
}

type Props = {
    children: ReactElement;
};

export default function FormProvider({ children }: Props) {
    const value: formContextType = {
        question: true,
    };
    return (
        <>
            <FormContext.Provider value={value}>
                {children}
            </FormContext.Provider>
        </>
    );
}
