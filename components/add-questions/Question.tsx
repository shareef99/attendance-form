import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import { useQuestions } from "../../context/questionsContext";
import { Input } from "@material-ui/core";
import { isSelected } from "../../helpers/question-utils";

interface Props {
    id: number;
    preview: boolean;
}

const QuestionInput = withStyles({
    root: {
        fontSize: "1.2rem",
        backgroundColor: "#D1D5DB",
        padding: "16px 16px 10px",
        borderRadius: ".25rem",
        borderColor: "#8B5CF6",
    },
})(Input);

const Question = ({ id, preview }: Props) => {
    const { updateQuestion, questions, selectedQuestion } = useQuestions();

    if (isSelected(selectedQuestion.id, id)) {
        return (
            <QuestionInput
                className="flex-auto"
                type="text"
                disabled={preview ? true : false}
                placeholder="Question"
                defaultValue={
                    questions.find((x) => x.id === id)?.question || undefined
                }
                onChange={(e) => updateQuestion(id, e.target.value)}
            />
        );
    } else {
        return (
            <h3 className="flex-auto font-medium text-xl">
                {questions[id]?.question || "Question"}
            </h3>
        );
    }
};

export default Question;
