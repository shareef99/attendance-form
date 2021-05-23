import TextField from "@material-ui/core/TextField";
import { useQuestions } from "../../context/questionsContext";
import { IconType } from "react-icons";

interface Props {
    id: number;
    preview: boolean;
}

const Question = ({ id, preview }: Props) => {
    const { updateQuestion, questions } = useQuestions();

    return (
        <TextField
            className="flex-auto"
            type="text"
            disabled={preview ? true : false}
            placeholder="Questions"
            variant="filled"
            defaultValue={
                questions.find((x) => x.id === id).question || undefined
            }
            onChange={(e) => updateQuestion(id, e.target.value)}
        />
    );
};

export default Question;
