import { Fragment, ReactNode, useState } from "react";

// Material-Ui import(s)
import Button from "@material-ui/core/Button";

// React-Icon imports
import {
    MdShortText,
    MdArrowDropDownCircle,
    MdDateRange,
    MdAccessTime,
} from "react-icons/md";
import { ImParagraphLeft, ImCheckboxChecked } from "react-icons/im";
import { CgRadioChecked } from "react-icons/cg";

// React Components imports
import DialogOptions from "./DialogOptions";
import OptionItem from "./OptionItem";
import { IconType } from "react-icons/lib";

interface Props {}

export interface OptionListItem {
    Icon: IconType;
    option: string;
}

const Options = ({}: Props) => {
    // Constants
    const options: Array<OptionListItem> = [
        {
            Icon: MdShortText,
            option: "Short answer",
        },
        {
            Icon: ImParagraphLeft,
            option: "Paragraph",
        },
        {
            Icon: ImCheckboxChecked,
            option: "Multiple choice",
        },
        {
            Icon: CgRadioChecked,
            option: "Checkboxes",
        },
        {
            Icon: MdArrowDropDownCircle,
            option: "Dropdown",
        },
    ];

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
            />
        </Fragment>
    );
};
export default Options;
