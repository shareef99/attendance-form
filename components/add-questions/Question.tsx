import { useQuestions } from "../../context/questionsContext";
import { isSelected, questionWithId } from "../../helpers/question-utils";
import { updateQuestion } from "../../helpers/firebase/question";
import { QuestionInput } from "../material-ui/QuestionInput";

interface Props {
    docId: string;
    id: number;
    preview: boolean;
}

const Question = ({ docId, id, preview }: Props) => {
    const { questions, selectedQuestion } = useQuestions();

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
                onChange={(e) => updateQuestion(docId, e.target.value)}
            />
        );
    } else {
        return (
            <h3 className="font-medium text-xl">
                {questionWithId(questions, id)?.question || "Question"}
            </h3>
        );
    }
};

export default Question;
