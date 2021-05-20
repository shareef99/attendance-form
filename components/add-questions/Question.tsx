import TextField from "@material-ui/core/TextField";
import { useQuestions } from "../../context/questionsContext";
import { IconType } from "react-icons";

interface Props {
    id: number;
    option: string;
    optionIcon: IconType;
    preview: boolean;
}

interface QuestionFormType {
    question: string;
}

const Question = ({ id, option, optionIcon, preview }: Props) => {
    const { updateQuestion, questions } = useQuestions();

    return (
        <div className="rowCenter space-x-4">
            <TextField
                className="border-b-4"
                type="text"
                disabled={preview ? true : false}
                placeholder="Questions"
                variant="filled"
                defaultValue={
                    questions.find((x) => x.id === id).question || undefined
                }
                onChange={(e) =>
                    updateQuestion(id, option, optionIcon, e.target.value)
                }
            />
        </div>
    );
};

export default Question;
