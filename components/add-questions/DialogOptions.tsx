// Material-Ui imports
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

// types import(s)
import { OptionType } from "./Options";

// React Components
import OptionItem from "./OptionItem";

export interface Props {
    open: boolean;
    onClose: (option?: OptionType) => void;
    options: Array<OptionType>;
    selectedOption: OptionType;
}

const DialogOptions = ({ onClose, open, options, selectedOption }: Props) => {
    const handleClose = (option: OptionType) => {
        onClose(option);
    };

    const handleListItemClick = (option: OptionType) => {
        onClose(option);
    };

    return (
        <Dialog
            onClose={() => handleClose(selectedOption)}
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
