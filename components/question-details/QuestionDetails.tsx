// Types
import { OptionType } from "../add-questions/Options";

// React Option Components
import ShortAnswer from "./option-details/ShortAnswer";
import Paragraph from "./option-details/Paragraph";
import MultipleChoice from "./option-details/MultipleChoice";
import Checkboxes from "./option-details/Checkboxes";
import Dropdown from "./option-details/Dropdown";

interface Props {
    selectedOption: OptionType;
}

const QuestionDetails = ({ selectedOption }: Props) => {
    const { option } = selectedOption;
    console.log(option);

    if (option === "Short answer") {
        return <ShortAnswer option={option} />;
    }

    if (option === "Paragraph") {
        return <Paragraph option={option} />;
    }

    if (option === "Multiple choice") {
        return <MultipleChoice />;
    }

    if (option === "Checkboxes") {
        return <Checkboxes />;
    }

    if (option === "Dropdown") {
        return <Dropdown />;
    }
};

export default QuestionDetails;
