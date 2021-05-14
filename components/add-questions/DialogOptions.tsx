// Material-Ui imports
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

// types import(s)
import { OptionListItem } from "./Options";

// React Components
import OptionItem from "./OptionItem";

export interface Props {
    open: boolean;
    onClose: (option?: OptionListItem) => void;
    options: Array<OptionListItem>;
}

const DialogOptions = ({ onClose, open, options }: Props) => {
    const handleClose = (option: OptionListItem) => {
        onClose(option);
    };

    const handleListItemClick = (option: OptionListItem) => {
        onClose(option);
    };

    return (
        <Dialog
            onClose={() => handleClose(options[0])}
            aria-labelledby="simple-dialog-title"
            open={open}
        >
            <DialogTitle id="simple-dialog-title">
                Choose question type
            </DialogTitle>
            <List>
                {options.map((option) => (
                    <ListItem
                        button
                        onClick={() => handleListItemClick(option)}
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
