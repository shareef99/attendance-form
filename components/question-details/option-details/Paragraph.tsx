// Material-Ui Imports
import Input from "@material-ui/core/Input";
import { useOptions } from "../../../context/optionsContext";
interface Props {
    id: number;
    isDisable: boolean;
}

const Paragraph = ({ id, isDisable }: Props) => {
    const { handleSubmitAnswer } = useOptions();

    return (
        <Input
            type="text"
            placeholder="Long answer text"
            disabled={isDisable}
            className="w-full"
            onChange={(e) => handleSubmitAnswer(id, e.target.value)}
            multiline={true}
        />
    );
};

export default Paragraph;
