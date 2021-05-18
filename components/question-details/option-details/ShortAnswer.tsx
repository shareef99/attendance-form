// Material-Ui Imports
import TextField from "@material-ui/core/TextField";

// Types
import { OptionType } from "../../add-questions/Options";

interface Props {
    selectedOption: OptionType;
    preview: boolean;
}

const ShortAnswer = ({ selectedOption }: Props) => {
    return (
        <form>
            <TextField placeholder={selectedOption.option + " text"} disabled />
        </form>
    );
};

export default ShortAnswer;
