import { Fragment, useState } from "react";

// Material-Ui import(s)
import Button from "@material-ui/core/Button";

// React Components imports
import DialogOptions from "./DialogOptions";
import OptionItem from "./OptionItem";
import { IconType } from "react-icons/lib";

// ...others
import { useQuestions } from "../../context/questionsContext";
import { useFormContext } from "../../context/formContext";

interface Props {
    id?: number;
    option?: string;
    selectedOption?: OptionType;
    onSetSelectedOption?: (option: OptionType) => void;
}

export interface OptionType {
    Icon: IconType;
    option: string;
}

const Options = (props: Props) => {
    const { id, option, onSetSelectedOption, selectedOption } = props;

    // Context
    const { options, updateQuestion } = useQuestions();

    // State
    const [open, setOpen] = useState(false);

    // Handler Functions
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (option: OptionType, id: number) => {
        setOpen(false);
        onSetSelectedOption(option);
        updateQuestion(id, option.option, option.Icon);
    };

    return (
        <Fragment>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                <OptionItem Icon={selectedOption.Icon} option={option} />
            </Button>
            <DialogOptions
                id={id}
                open={open}
                onClose={handleClose}
                options={options}
                selectedOption={selectedOption}
            />
        </Fragment>
    );
};
export default Options;
