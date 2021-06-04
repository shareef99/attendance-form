// Material-Ui imports
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import OptionItem from "./OptionItem";
import { useQuestions } from "../../context/questionsContext";
import { questionWithId } from "../../helpers/question-utils";
import { options } from "../../helpers/question-utils";

interface Props {
    id: number;
    open: boolean;
    onClose: (option: string) => void;
}

const DialogOptions = ({ id, onClose, open }: Props) => {
    const { questions } = useQuestions();

    // Handlers
    const handleClose = (option: string) => {
        onClose(option);
    };

    const handleListItemClick = (option: string) => {
        onClose(option);
    };

    return (
        <Dialog
            onClose={() => handleClose(questionWithId(questions, id).option)}
            aria-labelledby="options-dialog"
            open={open}
        >
            <DialogTitle id="simple-dialog-title">
                Choose question type
            </DialogTitle>
            <List>
                {options.map((x) => (
                    <ListItem
                        button
                        onClick={() => handleListItemClick(x.option)}
                        key={x.option}
                    >
                        <OptionItem option={x.option} Icon={x.Icon} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
};

export default DialogOptions;
