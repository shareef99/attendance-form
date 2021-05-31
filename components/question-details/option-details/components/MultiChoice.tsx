import { Radio } from "@material-ui/core";
import { useOptions } from "../../../../context/optionsContext";

interface Props {
    id: number;
    preview: boolean;
    optionText: string;
    answer: string | Array<string>;
    option: string;
}

const MultiChoice = ({ answer, id, option, optionText, preview }: Props) => {
    const { handleSubmitAnswer } = useOptions();

    return (
        option === "Multiple choice" && (
            <Radio
                checked={preview && answer === optionText}
                onChange={(e) => handleSubmitAnswer(id, e.target.value)}
                value={optionText}
                disabled={!preview}
            />
        )
    );
};

export default MultiChoice;
