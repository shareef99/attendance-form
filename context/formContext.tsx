import { createContext, ReactNode, useContext, useState } from "react";

type formContextType = {
    formTitle: string;
    handleFormTitle: (title: string) => void;
};

const formContextDefaultValues: formContextType = {
    formTitle: null,
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
    const [formTitle, setFormTitle] = useState<string>();

    // Handler functions
    const handleFormTitle = (title: string) => {
        setFormTitle(title);
    };

    // Others
    const value: formContextType = {
        formTitle,
        handleFormTitle,
    };

    return (
        <FormContext.Provider value={value}>{children}</FormContext.Provider>
    );
}
