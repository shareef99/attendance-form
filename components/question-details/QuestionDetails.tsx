// Types

// React Option Components
import ShortAnswer from "./option-details/ShortAnswer";
import Paragraph from "./option-details/Paragraph";
import MultipleChoice from "./option-details/MultipleChoice";
import Checkboxes from "./option-details/Checkboxes";
import Dropdown from "./option-details/Dropdown";
import { IconType } from "react-icons";
import { useQuestions } from "../../context/questionsContext";
import { useState } from "react";

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
    const { optionDetails } = questions[id];

    // States
    const [hasOthers, setHasOthers] = useState<boolean>(
        optionDetails.some((x) => x.text === "others")
    );

    // Handlers
    const handleSetHasOthers = (value: boolean) => {
        setHasOthers(value);
    };

    if (option === "Short answer") {
        return (
            <ShortAnswer selectedOption={{ option, Icon }} preview={preview} />
        );
    }

    if (option === "Paragraph") {
        return <Paragraph option={{ option, Icon }} preview={preview} />;
    }

    if (option === "Multiple choice") {
        return (
            <MultipleChoice
                id={id}
                isDisable={isDisable}
                optionDetails={optionDetails}
                hasOthers={hasOthers}
                handleSetHasOthers={handleSetHasOthers}
            />
        );
    }

    if (option === "Checkboxes") {
        return (
            <Checkboxes
                id={id}
                isDisable={isDisable}
                optionDetails={optionDetails}
                hasOthers={hasOthers}
                handleSetHasOthers={handleSetHasOthers}
            />
        );
    }

    if (option === "Dropdown") {
        return (
            <Dropdown
                id={id}
                isDisable={isDisable}
                optionDetails={optionDetails}
                hasOthers={hasOthers}
                handleSetHasOthers={handleSetHasOthers}
                option={{ option, Icon }}
            />
        );
    }
};

export default QuestionDetails;
