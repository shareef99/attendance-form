// Material-Ui Imports
import TextField from "@material-ui/core/TextField";

interface Props {
    option: string;
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
