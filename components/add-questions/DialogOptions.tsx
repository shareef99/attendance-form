// Material-Ui imports
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import OptionItem from "./OptionItem";
import { useQuestions } from "../../context/questionsContext";
import { IconType } from "react-icons/lib";

interface Props {
    id: number;
    open: boolean;
    onClose: (option: string, Icon: IconType, id?: number) => void;
}

const DialogOptions = ({ id, onClose, open }: Props) => {
    const { options, questions } = useQuestions();

    // Handlers
    const handleClose = (option: string, Icon: IconType, id: number) => {
        onClose(option, Icon, id);
    };

    const handleListItemClick = (
        id: number,
        option: string,
        Icon: IconType
    ) => {
        onClose(option, Icon, id);
    };

    return (
        <Dialog
            onClose={() =>
                handleClose(questions[id].option, questions[id].optionIcon, id)
            }
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
                        onClick={() =>
                            handleListItemClick(id, option.option, option.Icon)
                        }
                        key={option.option}
                    >
                        <OptionItem option={option.option} Icon={option.Icon} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
};

export default DialogOptions;
