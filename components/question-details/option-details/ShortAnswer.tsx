import Input from "@material-ui/core/Input";
import { useOptions } from "../../../context/optionsContext";

interface Props {
    id: number;
    isDisable: boolean;
}

const ShortAnswer = ({ id, isDisable }: Props) => {
    const { handleShortAnswer } = useOptions();

    return (
        <Input
            type="text"
            placeholder="Short answer text"
            disabled={isDisable}
            className="w-full"
            onChange={(e) => handleShortAnswer(id, e.target.value)}
        />
    );
};

export default ShortAnswer;
