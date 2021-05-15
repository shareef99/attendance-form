// Material-Ui import(s)
import TextField from "@material-ui/core/TextField";
import { ImCheckboxChecked } from "react-icons/im";

// React-Hook-Form Imports
import { useForm, SubmitHandler } from "react-hook-form";

// Others
import { useQuestions } from "../../context/questionsContext";
import { IconType } from "react-icons";

interface Props {
    id: number;
    option: string;
    optionIcon: IconType;
}

interface QuestionFormType {
    question: string;
}

const Question = ({ id, option, optionIcon }: Props) => {
    // Context
    const { updateQuestion, questions } = useQuestions();

    // React-Hook-Form
    const { register, handleSubmit } = useForm<QuestionFormType>();

    const onSubmit: SubmitHandler<QuestionFormType> = (data) => {
        const { question } = data;
        updateQuestion(id, option, optionIcon, question);
        console.log("called");
    };

    return (
        <form
            action=""
            className="rowCenter space-x-4"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                variant="filled"
                placeholder="Question"
                defaultValue={
                    questions.find((x) => x.id === id).question || undefined
                }
                {...register("question")}
            />
            <button type="submit">
                <ImCheckboxChecked />
            </button>
        </form>
    );
};

export default Question;
