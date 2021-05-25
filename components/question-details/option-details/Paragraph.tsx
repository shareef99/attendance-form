// Material-Ui Imports
import { Input } from "@material-ui/core";
interface Props {
    isDisable: boolean;
}

const Paragraph = ({ isDisable }: Props) => {
    return (
        <Input
            type="text"
            placeholder="Long answer text"
            disabled={isDisable}
            className="w-full"
            multiline={true}
        />
    );
};

export default Paragraph;
