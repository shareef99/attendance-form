import {
    Checkbox,
    Input,
    InputLabel,
    ListItemText,
    MenuItem,
    Select,
    Menu,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { MdDelete, MdContentCopy, MdMoreVert } from "react-icons/md";
import { useQuestions } from "../../context/questionsContext";

interface Props {
    id: number;
}

const QuestionFooter = ({ id }: Props) => {
    const {
        questions,
        handleDeleteQuestion,
        handleCopyQuestion,
        handleAddDescription,
        handleRemoveDescription,
    } = useQuestions();

    // State
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isDescriptionAdded, setIsDescriptionAdded] = useState<boolean>(null);

    // Handler functions
    const handleDescription = () => {
        setIsDescriptionAdded(!isDescriptionAdded);
        // handleClose();
    };

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Effects
    useEffect(() => {
        if (isDescriptionAdded) {
            handleRemoveDescription(id);
            return;
        }
        handleAddDescription(id);
    }, [isDescriptionAdded]);

    return (
        <div className="flex justify-end space-x-4">
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
