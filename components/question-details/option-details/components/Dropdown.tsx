import { useState, MouseEvent } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useAnswer } from "../../../../context/answerContext";
import { OptionDetailsType } from "../../../../context/questionsContext";
import { DropdownButton } from "../../../material-ui/DropdownButton";
import { DropdownMenu } from "../../../material-ui/DropdownMenu";
import { DropdownMenuItem } from "../../../material-ui/DropdownMenuItem";
import Fade from "@material-ui/core/Fade";

interface Props {
    id: number;
    answer: string | Array<string>;
    optionDetails: Array<OptionDetailsType>;
}

const Dropdown = ({ id, answer, optionDetails }: Props) => {
    // Context
    const { handleSubmitAnswer } = useAnswer();

    // State
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // Handlers
    const handleDropdownOpen = (e: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleDropdownClose = (e: any) => {
        setAnchorEl(null);
        if (!e.target.firstChild) return;
        handleSubmitAnswer(id, e.target.firstChild.wholeText);
    };

    return (
        <>
            <DropdownButton
                aria-haspopup="true"
                variant="outlined"
                onClick={handleDropdownOpen}
            >
                {answer ? (answer as string) : "Choose"}
                <MdArrowDropDown
                    style={{
                        width: "24px",
                        height: "24px",
                    }}
                />
            </DropdownButton>
            <DropdownMenu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleDropdownClose}
                TransitionComponent={Fade}
            >
                <DropdownMenuItem disabled>Choose</DropdownMenuItem>
                <hr />
                {optionDetails?.map((optionDetail) => (
                    <DropdownMenuItem
                        onClick={handleDropdownClose}
                        value={optionDetail.text}
                    >
                        {optionDetail.text}
                    </DropdownMenuItem>
                ))}
            </DropdownMenu>
        </>
    );
};

export default Dropdown;
