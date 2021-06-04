import Input from "@material-ui/core/Input";
import withStyles from "@material-ui/core/styles/withStyles";
import { useQuestions } from "../../../context/questionsContext";
import { isSelected } from "../../../helpers/question-utils";
import QuestionFooter from "../QuestionFooter";

interface Props {
    docId: string;
    preview: boolean;
    id: number;
    description: string;
    title: string;
}

const TitleInput = withStyles({
    root: {
        fontSize: "1.5rem",
    },
})(Input);

const DescriptionInput = withStyles({
    root: {
        fontSize: "1.12rem",
    },
})(Input);

const TitleNDescription = ({
    docId,
    preview,
    id,
    title,
    description,
}: Props) => {
    const { handleUpdateDescription, handleUpdateTitle, selectedQuestion } =
        useQuestions();

    return (
        <div className="space-y-8 w-full">
            <div className="space-y-8 colCenter items-start w-full ">
                <TitleInput
                    defaultValue={title || "Untitled title"}
                    placeholder={id === 0 ? "Form title" : "Title"}
                    readOnly={preview || !isSelected(selectedQuestion.id, id)}
                    fullWidth={true}
                    multiline={true}
                    onChange={(e) => handleUpdateTitle(id, e.target.value)}
                    required={true}
                />
                <DescriptionInput
                    placeholder={
                        id === 0 ? "From Description" : "Description (optional)"
                    }
                    readOnly={preview || !isSelected(selectedQuestion.id, id)}
                    defaultValue={description || ""}
                    fullWidth={true}
                    multiline={true}
                    onChange={(e) =>
                        handleUpdateDescription(id, e.target.value)
                    }
                    required={true}
                />
            </div>
            {isSelected(selectedQuestion.id, id) && (
                <>
                    <div className="border-b-[3px]" />
                    <QuestionFooter docId={docId} id={id} />
                </>
            )}
        </div>
    );
};

export default TitleNDescription;
