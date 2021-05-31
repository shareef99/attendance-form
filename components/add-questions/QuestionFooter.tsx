import { useEffect, useState } from "react";
import { useQuestions } from "../../context/questionsContext";
import { MdDelete, MdContentCopy, MdMoreVert } from "react-icons/md";
// Material UI imports
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import withStyles from "@material-ui/core/styles/withStyles";
import { questionWithId } from "../../helpers/question-utils";

interface Props {
    id: number;
}

const PurpleSwitch = withStyles({
    switchBase: {
        "&$checked": {
            color: "rgb(103, 58, 183)",
        },
        "&$checked + $track": {
            backgroundColor: "#b9b9b9",
        },
    },
    checked: {},
    track: {},
})(Switch);

const QuestionFooter = ({ id }: Props) => {
    const {
        questions,
        handleDeleteQuestion,
        handleCopyQuestion,
        handleAddDescription,
        handleRemoveDescription,
        handleSetQuestions,
    } = useQuestions();

    // State
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isDescriptionAdded, setIsDescriptionAdded] = useState<boolean>(null);
    const [isRequired, setIsRequired] = useState<boolean>(false);

    // Handler functions
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDescription = () => {
        if (isDescriptionAdded) {
            handleRemoveDescription(id);
            setIsDescriptionAdded(false);
            handleClose();
            return;
        }

        handleAddDescription(id);
        setIsDescriptionAdded(true);
        handleClose();
    };

    const handleRequiredToggle = () => {
        setIsRequired(!isRequired);
    };

    // Effects
    useEffect(() => {
        handleSetQuestions(
            questions.map((question) =>
                question.id === id
                    ? { ...question, isRequired }
                    : { ...question }
            )
        );
    }, [isRequired]);

    return (
        <div className="rowCenter justify-end space-x-4">
            <MdContentCopy
                style={{ width: "1.5rem", height: "2rem", cursor: "pointer" }}
                className="text-gray-500"
                title="Copy Question"
                onClick={() => handleCopyQuestion(id)}
            />
            <MdDelete
                style={{ width: "1.5rem", height: "2rem", cursor: "pointer" }}
                className="text-gray-500"
                title="Delete Question"
                onClick={() => handleDeleteQuestion(id)}
            />
            {!questionWithId(questions, id).title && (
                // Item with title should not have required field
                <>
                    <div className="w-px h-6 bg-gray-500" />
                    <div className="text-lightBlack font-median text-lg">
                        <span>Required</span>
                        <PurpleSwitch
                            checked={isRequired}
                            onChange={handleRequiredToggle}
                            color="primary"
                        />
                    </div>
                </>
            )}
            <MdMoreVert
                style={{
                    width: "1.5rem",
                    height: "2rem",
                    cursor: "pointer",
                }}
                className="text-gray-500"
                title="More Options"
                onClick={handleClick}
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleDescription}>Description</MenuItem>
            </Menu>
        </div>
    );
};

export default QuestionFooter;
