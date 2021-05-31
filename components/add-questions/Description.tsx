import Input from "@material-ui/core/Input";
import { useQuestions } from "../../context/questionsContext";
import { isSelected } from "../../helpers/question-utils";

interface Props {
    preview: boolean;
    id: number;
    description: string;
}

const Description = ({ description, id, preview }: Props) => {
    const { handleUpdateDescription, selectedQuestion } = useQuestions();

    return (
        <Input
            type="text"
            placeholder="Description (optional)"
            fullWidth={true}
            readOnly={preview || !isSelected(selectedQuestion.id, id)}
            defaultValue={description}
            onChange={(e) => {
                handleUpdateDescription(id, e.target.value);
            }}
        />
    );
};

export default Description;
