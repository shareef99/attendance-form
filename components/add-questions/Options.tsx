import { Fragment, useState } from "react";

// Material-Ui import(s)
import Button from "@material-ui/core/Button";

// React Components imports
import DialogOptions from "./DialogOptions";
import OptionItem from "./OptionItem";

// ...others
import { useQuestions } from "../../context/questionsContext";
import { IconType } from "react-icons/lib";

interface Props {
    id?: number;
    option?: string;
    preview?: boolean;
    Icon: IconType;
}

export interface OptionType {
    Icon: IconType;
    option: string;
}

const Options = (props: Props) => {
    const { id, option, preview, Icon } = props;

    // Context
    const { updateQuestionOption } = useQuestions();

    // State
    const [open, setOpen] = useState(false);

    // Handler Functions
    const handleClickOpen = () => {
        if (preview) {
            return;
        }
        setOpen(true);
    };

    const handleClose = (option: string, Icon: IconType, id: number) => {
        setOpen(false);
        console.log(id);
        updateQuestionOption(id, option);
    };

    return (
        <Fragment>
            <Button
                variant="outlined"
                color="primary"
                disabled={preview}
                onClick={handleClickOpen}
            >
                <OptionItem Icon={Icon} option={option} />
            </Button>
            <DialogOptions id={id} open={open} onClose={handleClose} />
        </Fragment>
    );
};
export default Options;
