import { Fragment, useState } from "react";
// Material-Ui import(s)
import Button from "@material-ui/core/Button";
// React Components imports
import DialogOptions from "./DialogOptions";
import OptionItem from "./OptionItem";
// ...others
import { IconType } from "react-icons/lib";
import { updateQuestionOption } from "../../helpers/firebase/question";

interface Props {
    docId: string;
    id: number;
    option: string;
    preview: boolean;
    Icon: IconType;
}

export interface OptionType {
    Icon: IconType;
    option: string;
}

const Options = ({ docId, id, option, preview, Icon }: Props) => {
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
        updateQuestionOption(docId, option);
    };

    return (
        <Fragment>
            <Button
                variant="outlined"
                color="primary"
                disabled={preview}
                onClick={handleClickOpen}
                style={{ width: "200px", padding: "10px 0px" }}
            >
                <OptionItem Icon={Icon} option={option} />
            </Button>
            <DialogOptions id={id} open={open} onClose={handleClose} />
        </Fragment>
    );
};
export default Options;
