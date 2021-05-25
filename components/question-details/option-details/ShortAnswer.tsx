// Material-Ui Imports
import { Input } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

// Types
import { OptionType } from "../../add-questions/Options";

interface Props {
    selectedOption: OptionType;
    isDisable: boolean;
}

const ShortAnswer = ({ selectedOption, isDisable }: Props) => {
    return (
        <Input
            placeholder={selectedOption.option + " text"}
            disabled={isDisable}
            style={{ width: "50%" }}
        />
    );
};

export default ShortAnswer;
