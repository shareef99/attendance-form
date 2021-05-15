// Material-Ui imports
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

// types import(s)
import { OptionType } from "./Options";

// React Components
import OptionItem from "./OptionItem";
import { IconType } from "react-icons/lib";

interface Props {
    id?: number;
    open: boolean;
    onClose: (option: OptionType, id?: number) => void;
    options: Array<OptionType>;
    selectedOption: OptionType;
}

const DialogOptions = ({
    id,
    onClose,
    open,
    options,
    selectedOption,
}: Props) => {
    const handleClose = (option: OptionType, id: number) => {
        onClose(option, id);
    };

    const handleListItemClick = (option: OptionType, id: number) => {
        onClose(option, id);
    };

    return (
        <Dialog
            onClose={() => handleClose(selectedOption, id)}
            aria-labelledby="options-dialog"
            open={open}
        >
            <DialogTitle id="simple-dialog-title">
                Choose question type
            </DialogTitle>
            <List>
                {options.map((option) => (
                    <ListItem
                        button
                        onClick={() => handleListItemClick(option, id)}
                        key={option.option}
                    >
                        <OptionItem Icon={option.Icon} option={option.option} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
};

export default DialogOptions;
