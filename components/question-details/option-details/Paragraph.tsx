// Material-Ui Imports
import TextField from "@material-ui/core/TextField";

// Types
import { OptionType } from "../../add-questions/Options";

interface Props {
    option: OptionType;
    preview: boolean;
}

const Paragraph = ({ option }: Props) => {
    return (
        <form>
            <TextField
                id="standard-basic"
                placeholder={"Long answer text"}
                disabled
            />
        </form>
    );
};

export default Paragraph;
