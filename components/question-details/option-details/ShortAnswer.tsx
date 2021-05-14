// Material-Ui Imports
import TextField from "@material-ui/core/TextField";

interface Props {
    option: string;
}

const ShortAnswer = ({ option }: Props) => {
    return (
        <form>
            <TextField
                id="standard-basic"
                placeholder={option + " text"}
                disabled
            />
        </form>
    );
};

export default ShortAnswer;
