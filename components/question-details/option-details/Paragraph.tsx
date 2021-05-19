// Material-Ui Imports
import TextField from "@material-ui/core/TextField";

// Types
import { OptionType } from "../../add-questions/Options";

interface Props {
    option: OptionType;
    isDisable: boolean;
}

const Paragraph = ({ option, isDisable }: Props) => {
    return (
        <form>
            <TextField
                id="standard-basic"
                placeholder={"Long answer text"}
                disabled={isDisable}
            />
        </form>
    );
};

export default Paragraph;
