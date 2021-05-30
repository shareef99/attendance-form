import Input from "@material-ui/core/Input";
import { useOptions } from "../../../context/optionsContext";

interface Props {
    id: number;
    isDisable: boolean;
}

const ShortAnswer = ({ id, isDisable }: Props) => {
    const { handleSubmitAnswer } = useOptions();

    return (
        <Input
            type="text"
            placeholder="Short answer text"
            disabled={isDisable}
            className="w-full"
            onChange={(e) => handleSubmitAnswer(id, e.target.value)}
        />
    );
};

export default ShortAnswer;
