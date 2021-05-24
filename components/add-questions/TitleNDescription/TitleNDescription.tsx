import TextField from "@material-ui/core/TextField";
import { useQuestions } from "../../../context/questionsContext";
import QuestionFooter from "../QuestionFooter";

interface Props {
    preview: boolean;
    id: number;
    description: string;
    title: string;
}

const TitleNDescription = ({ preview, id, title, description }: Props) => {
    const { handleUpdateDescription, handleUpdateTitle } = useQuestions();

    return (
        <div className="space-y-8">
            <div className="space-y-8 colCenter items-start">
                <TextField
                    variant="filled"
                    disabled={preview}
                    defaultValue={title || "Untitled title"}
                    onChange={(e) => handleUpdateTitle(id, e.target.value)}
                />
                <TextField
                    placeholder="Description (optional)"
                    disabled={preview}
                    defaultValue={description || ""}
                    onChange={(e) =>
                        handleUpdateDescription(id, e.target.value)
                    }
                />
            </div>
            <div className="border-b-[3px]" />
            <QuestionFooter id={id} />
        </div>
    );
};

export default TitleNDescription;
