import { useState } from "react";
import ShortAnswer from "./option-details/ShortAnswer";
import Paragraph from "./option-details/Paragraph";
import MCD from "./option-details/MCD";
import { useQuestions } from "../../context/questionsContext";
import { IconType } from "react-icons";

interface Props {
    id: number;
    option: string;
    Icon: IconType;
    preview: boolean;
}

const QuestionDetails = ({ id, Icon, preview, option }: Props) => {
    const { questions } = useQuestions();

    // Constants
    const isDisable = preview ? false : true;
    const optionDetails = questions[id]?.optionDetails;

    // States
    const [hasOthers, setHasOthers] = useState<boolean>(
        optionDetails?.some((x) => x.text === "others")
    );

    // Handlers
    const handleSetHasOthers = (value: boolean) => {
        setHasOthers(value);
    };

    if (option === "Short answer") {
        return (
            <ShortAnswer
                selectedOption={{ option, Icon }}
                isDisable={isDisable}
            />
        );
    }

    if (option === "Paragraph") {
        return <Paragraph option={{ option, Icon }} isDisable={isDisable} />;
    }

    let dash = option;
    if (
        option === "Multiple choice" ||
        option === "Checkboxes" ||
        option === "Dropdown"
    ) {
        // MCD stands for multi choice, Checkboxes, DropDown
        return (
            <MCD
                id={id}
                isDisable={isDisable}
                option={dash}
                optionDetails={optionDetails}
                hasOthers={hasOthers}
                handleSetHasOthers={handleSetHasOthers}
            />
        );
    }
};

export default QuestionDetails;
