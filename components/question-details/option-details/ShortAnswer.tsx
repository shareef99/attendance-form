// Material-Ui Imports
import TextField from "@material-ui/core/TextField";

// Types
import { OptionType } from "../../add-questions/Options";

interface Props {
    selectedOption: OptionType;
    isDisable: boolean;
}

const ShortAnswer = ({ selectedOption, isDisable }: Props) => {
    return (
        <form>
            <TextField
                placeholder={selectedOption.option + " text"}
                disabled={isDisable}
            />
        </form>
    );
};

export default ShortAnswer;
