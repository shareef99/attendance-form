import { Fragment, useState } from "react";

// Material-Ui import(s)
import Button from "@material-ui/core/Button";

// React Components imports
import DialogOptions from "./DialogOptions";
import OptionItem from "./OptionItem";
import { IconType } from "react-icons/lib";

// ...others
import { useQuestions } from "../../context/questionsContext";

interface Props {}

export interface OptionListItem {
    Icon: IconType;
    option: string;
}

const Options = ({}: Props) => {
    // Context
    const { options } = useQuestions();

    // State
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<OptionListItem>(
        options[0]
    );

    // Handler Functions
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (option?: OptionListItem) => {
        setOpen(false);
        setSelectedOption(option);
    };

    return (
        <Fragment>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                <OptionItem
                    Icon={selectedOption.Icon}
                    option={selectedOption.option}
                />
            </Button>
            <DialogOptions
                open={open}
                onClose={handleClose}
                options={options}
                selectedOption={selectedOption}
            />
        </Fragment>
    );
};
export default Options;
