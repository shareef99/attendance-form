import React from "react";
import { OptionListItem } from "../add-questions/Options";

interface Props {
    selectedOption: OptionListItem;
}

const QuestionDetails = ({ selectedOption }: Props) => {
    return <div>{selectedOption.option}</div>;
};

export default QuestionDetails;
