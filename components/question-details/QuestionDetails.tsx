// Types
import { OptionType } from "../add-questions/Options";

// React Option Components
import ShortAnswer from "./option-details/ShortAnswer";
import Paragraph from "./option-details/Paragraph";
import MultipleChoice from "./option-details/MultipleChoice";
import Checkboxes from "./option-details/Checkboxes";
import Dropdown from "./option-details/Dropdown";
import { IconType } from "react-icons";

interface Props {
    id: number;
    option: string;
    Icon: IconType;
    preview: boolean;
}

const QuestionDetails = ({ id, Icon, preview, option }: Props) => {
    const isDisable = preview ? true : false;

    if (option === "Short answer") {
        return (
            <ShortAnswer selectedOption={{ option, Icon }} preview={preview} />
        );
    }

    if (option === "Paragraph") {
        return <Paragraph option={{ option, Icon }} preview={preview} />;
    }

    if (option === "Multiple choice") {
        return <MultipleChoice preview={preview} id={id} />;
    }

    if (option === "Checkboxes") {
        return (
            <Checkboxes
                option={{ option, Icon }}
                preview={preview}
                isDisable={isDisable}
            />
        );
    }

    if (option === "Dropdown") {
        return <Dropdown option={{ option, Icon }} preview={preview} />;
    }
};

export default QuestionDetails;
