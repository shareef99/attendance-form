import { useEffect, useState } from "react";
import { useQuestions } from "../../context/questionsContext";
import { MdDelete, MdContentCopy, MdMoreVert } from "react-icons/md";
// Material UI imports
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { RequiredToggle } from "../material-ui/PurpleSwitch";
// helpers
import { questionWithId } from "../../helpers/question-utils";
import {
    deleteQuestion,
    requiredToggleHandler,
} from "../../helpers/firebase/question";

interface Props {
    docId: string;
    id: number;
}

const QuestionFooter = ({ docId, id }: Props) => {
    const {
        questions,
        handleCopyQuestion,
        handleAddDescription,
        handleRemoveDescription,
    } = useQuestions();

    // State
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isDescriptionAdded, setIsDescriptionAdded] = useState<boolean>(null);
    const [isRequired, setIsRequired] = useState<boolean>(
        questionWithId(questions, id).isRequired
    );

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
        requiredToggleHandler(docId, isRequired);
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
                onClick={() => deleteQuestion(docId)}
            />
            {!questionWithId(questions, id).title && (
                // Item with title should not have required field
                <>
                    <div className="w-px h-6 bg-gray-500" />
                    <div className="text-lightBlack font-median text-lg">
                        <span>Required</span>
                        <RequiredToggle
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
