import { useState } from "react";
import ShortAnswer from "./option-details/ShortAnswer";
import Paragraph from "./option-details/Paragraph";
import MCD from "./option-details/MCD";
import { useQuestions } from "../../context/questionsContext";
import { IconType } from "react-icons";
import { questionWithId } from "../../helpers/question-utils";

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
    const optionDetails = questionWithId(questions, id)?.optionDetails;

    if (option === "Short answer") {
        return (
            <div className="sm:w-[70%] md:w-[60%]">
                <ShortAnswer id={id} isDisable={isDisable} />
            </div>
        );
    }

    if (option === "Paragraph") {
        return (
            <div>
                <Paragraph id={id} isDisable={isDisable} />
            </div>
        );
    }

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
                option={option}
                optionDetails={optionDetails}
            />
        );
    }

    return <></>;
};

export default QuestionDetails;
