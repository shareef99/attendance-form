// Material-Ui Imports
import TextField from "@material-ui/core/TextField";

// Types
import { OptionType } from "../../add-questions/Options";

interface Props {
    isDisable: boolean;
}

const Paragraph = ({ isDisable }: Props) => {
    return (
        <TextField
            id="standard-basic"
            placeholder={"Long answer text"}
            disabled={isDisable}
            className="w-full"
            multiline={true}
        />
    );
};

export default Paragraph;
