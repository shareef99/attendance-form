import Input from "@material-ui/core/Input";
import { useAnswer } from "../../../context/answerContext";

interface Props {
    id: number;
    preview: boolean;
    answer: string | number;
}

const ShortAnswer = ({ id, preview, answer }: Props) => {
    const { handleSubmitAnswer } = useAnswer();

    return (
        <Input
            type="text"
            placeholder="Short answer text"
            disabled={!preview}
            defaultValue={preview ? answer : null}
            className="w-full"
            onChange={(e) => handleSubmitAnswer(id, e.target.value)}
        />
    );
};

export default ShortAnswer;
