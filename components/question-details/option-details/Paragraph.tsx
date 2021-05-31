// Material-Ui Imports
import Input from "@material-ui/core/Input";
import { useAnswer } from "../../../context/answerContext";
interface Props {
    id: number;
    preview: boolean;
    answer: string;
}

const Paragraph = ({ id, preview }: Props) => {
    const { handleSubmitAnswer } = useAnswer();

    return (
        <Input
            type="text"
            placeholder="Long answer text"
            disabled={preview}
            className="w-full"
            onChange={(e) => handleSubmitAnswer(id, e.target.value)}
            multiline={true}
        />
    );
};

export default Paragraph;
