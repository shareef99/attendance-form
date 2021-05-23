import TextField from "@material-ui/core/TextField";
import { useQuestions } from "../../context/questionsContext";

interface Props {
    preview: boolean;
    id: number;
    description: string;
    title: string;
}

const TitleNDescription = ({ preview, id, title, description }: Props) => {
    const { handleUpdateDescription, handleUpdateTitle } = useQuestions();

    return (
        <>
            <TextField
                variant="filled"
                disabled={preview}
                defaultValue={title || "Untitled title"}
                onChange={(e) => handleUpdateTitle(id, e.target.value)}
            />
            <TextField
                placeholder="Description (optional)"
                disabled={preview}
                defaultValue={description || null}
                onChange={(e) => handleUpdateDescription(id, e.target.value)}
            />
        </>
    );
};

export default TitleNDescription;
