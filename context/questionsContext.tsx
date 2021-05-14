import { createContext, ReactNode, useContext, useState } from "react";
import { OptionListItem } from "../components/add-questions/Options";

// React-Icon imports
import {
    MdShortText,
    MdArrowDropDownCircle,
    MdDateRange,
    MdAccessTime,
} from "react-icons/md";
import { ImParagraphLeft, ImCheckboxChecked } from "react-icons/im";
import { CgRadioChecked } from "react-icons/cg";

type questionsContextType = {
    options: Array<OptionListItem>;
};

const questionsContextDefaultValues: questionsContextType = {
    options: [],
};

const questionsContext = createContext<questionsContextType>(
    questionsContextDefaultValues
);

export function useQuestions() {
    return useContext(questionsContext);
}

interface Props {
    children: ReactNode;
}

export default function QuestionsProvider({ children }: Props) {
    // Constants
    const options: Array<OptionListItem> = [
        {
            Icon: MdShortText,
            option: "Short answer",
        },
        {
            Icon: ImParagraphLeft,
            option: "Paragraph",
        },
        {
            Icon: ImCheckboxChecked,
            option: "Multiple choice",
        },
        {
            Icon: CgRadioChecked,
            option: "Checkboxes",
        },
        {
            Icon: MdArrowDropDownCircle,
            option: "Dropdown",
        },
    ];

    // state
    // const [option];

    // Handler functions

    const value: questionsContextType = {
        options,
    };

    return (
        <>
            <questionsContext.Provider value={value}>
                {children}
            </questionsContext.Provider>
        </>
    );
}
