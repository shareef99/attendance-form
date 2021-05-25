import Input from "@material-ui/core/Input";
import withStyles from "@material-ui/core/styles/withStyles";
import { useQuestions } from "../../../context/questionsContext";
import QuestionFooter from "../QuestionFooter";

interface Props {
    preview: boolean;
    id: number;
    description: string;
    title: string;
}

const TitleInput = withStyles({
    root: {
        fontSize: "2rem",
    },
})(Input);

const DescriptionInput = withStyles({
    root: {
        fontSize: "1.2rem",
    },
})(Input);

const TitleNDescription = ({ preview, id, title, description }: Props) => {
    const { handleUpdateDescription, handleUpdateTitle } = useQuestions();

    return (
        <div className="space-y-8 w-full">
            <div className="space-y-8 colCenter items-start w-full ">
                <TitleInput
                    defaultValue={title || "Untitled title"}
                    placeholder={id === 0 ? "Form title" : "Title"}
                    readOnly={preview}
                    fullWidth={true}
                    multiline={true}
                    onChange={(e) => handleUpdateTitle(id, e.target.value)}
                    required={true}
                />
                <DescriptionInput
                    placeholder={
                        id === 0 ? "From Description" : "Description (optional)"
                    }
                    readOnly={preview}
                    defaultValue={description || ""}
                    fullWidth={true}
                    multiline={true}
                    onChange={(e) =>
                        handleUpdateDescription(id, e.target.value)
                    }
                    required={true}
                />
            </div>
            {id !== 0 && (
                <>
                    <div className="border-b-[3px]" />
                    <QuestionFooter id={id} />
                </>
            )}
        </div>
    );
};

export default TitleNDescription;
