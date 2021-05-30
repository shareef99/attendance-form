import { Button, Checkbox, Menu, MenuItem, Radio } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import { ImCross } from "react-icons/im";
import { MdArrowDropDown } from "react-icons/md";
import { useOptions } from "../../../context/optionsContext";
import {
    OptionDetailsType,
    useQuestions,
} from "../../../context/questionsContext";
import { isSelected } from "../../../helpers/question-utils";

interface Props {
    id: number;
    preview: boolean;
    option: string;
    optionDetails: Array<OptionDetailsType>;
}

const DropdownButton = withStyles({
    root: {
        textTransform: "none",
        fontSize: 16,
        padding: "6px 12px",
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
        "&:hover": {},
        "&:active": {},
        "&:focus": {},
    },
})(Button);

const MCD = ({ id, preview, optionDetails, option }: Props) => {
    // States
    const [selectedMultiValue, setSelectedMultiValue] = useState<string>(null);
    const [selectedCheckboxesValue, setSelectedCheckboxesValue] = useState<
        Array<string>
    >([]);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    // Context
    const {
        handleUpdateOptionsDetails,
        handleEditOption,
        handleDeleteOptionDetail,
        selectedQuestion,
    } = useQuestions();
    const {
        handleMultiAnswer,
        handleCheckboxesAnswer,
        handleDropdownAnswer,
        handleSubmitAnswer,
    } = useOptions();

    // Handlers
    const handleAddChoice = (e: any) => {
        e.preventDefault();

        const lastIndex: number = optionDetails?.length - 1;
        handleUpdateOptionsDetails(id, {
            id: optionDetails[lastIndex]?.id + 1,
            text: "option " + (optionDetails[lastIndex]?.id + 1),
        });
    };

    const handleAddOther = (e: any) => {
        e.preventDefault();

        const lastIndex: number = optionDetails?.length - 1;
        handleUpdateOptionsDetails(id, {
            id: optionDetails[lastIndex]?.id + 1,
            text: "others",
        });
    };

    const handleMultiValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedMultiValue(e.target.value);
        handleSubmitAnswer(id, e.target.value);
        // handleMultiAnswer(id, e.target.value);
    };

    const handleCheckboxesValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedCheckboxesValue((prevState) => [
                ...prevState,
                e.target.value,
            ]);
        }

        if (!e.target.checked) {
            setSelectedCheckboxesValue(
                selectedCheckboxesValue.filter((x) => x !== e.target.value)
            );
        }
    };

    const handleDropdownOpen = (e: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleDropdownClose = (e: any) => {
        setAnchorEl(null);
        if (!e.target.firstChild) return;
        handleSubmitAnswer(id, e.target.firstChild.wholeText);
        // handleDropdownAnswer(id, e.target.firstChild.wholeText);
        console.log(e.target.firstChild.wholeText, e.target);
    };

    // Effects
    useEffect(() => {
        // This effect update the checkbox value after state is updated successfully
        // The if exception prevent assigning initial value of state
        if (selectedCheckboxesValue.length === 0) return;
        handleSubmitAnswer(id, selectedCheckboxesValue);
        // handleCheckboxesAnswer(id, selectedCheckboxesValue);
    }, [selectedCheckboxesValue]);

    return (
        <ul className={`${option === "Dropdown" ? "space-y-4" : "space-y-0"}`}>
            {option === "Dropdown" && preview ? (
                <>
                    <DropdownButton
                        aria-haspopup="true"
                        variant="outlined"
                        onClick={handleDropdownOpen}
                    >
                        Choose{" "}
                        <MdArrowDropDown
                            style={{
                                width: "24px",
                                height: "24px",
                            }}
                        />
                    </DropdownButton>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleDropdownClose}
                        style={{ width: "100%", padding: "0px 15px" }}
                    >
                        <MenuItem disabled>Choose</MenuItem>
                        <hr />
                        {optionDetails?.map((optionDetail) => (
                            <MenuItem
                                onClick={(e) => handleDropdownClose(e)}
                                value={optionDetail.text}
                            >
                                {optionDetail.text}
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            ) : (
                optionDetails?.map((optionDetail, index) => {
                    if (optionDetail.text === "others") {
                        return (
                            <li
                                key="others"
                                className="rowCenter justify-between"
                            >
                                {/* Others option */}
                                <div>
                                    {option === "Checkboxes" && (
                                        <Checkbox
                                            onChange={(e) =>
                                                handleCheckboxesValue(e)
                                            }
                                            value={optionDetail.text}
                                            disabled={!preview}
                                        />
                                    )}
                                    {option === "Multiple choice" && (
                                        <Radio
                                            checked={
                                                selectedMultiValue ===
                                                optionDetail.text
                                            }
                                            onChange={(e) =>
                                                handleMultiValue(e)
                                            }
                                            value={optionDetail.text}
                                            disabled={!preview}
                                        />
                                    )}
                                    {option === "Dropdown" && !preview && (
                                        <span>{index + 1}. </span>
                                    )}
                                    <input
                                        type="text"
                                        disabled
                                        defaultValue={
                                            preview ? "Others..." : "Other: "
                                        }
                                    />
                                </div>
                                {/* Others Cancel/Delete button */}
                                {isSelected(selectedQuestion.id, id) && (
                                    <div
                                        className="cursor-pointer"
                                        title="Cancel option"
                                        onClick={() => {
                                            if (optionDetails.length > 1) {
                                                handleDeleteOptionDetail(
                                                    id,
                                                    optionDetail.id
                                                );
                                            }
                                        }}
                                    >
                                        <ImCross className="text-gray-500" />
                                    </div>
                                )}
                            </li>
                        );
                    }
                    return (
                        <li
                            key={optionDetail.id}
                            className="rowCenter justify-between"
                        >
                            {/* Main list of options */}
                            <div>
                                {option === "Checkboxes" && (
                                    <Checkbox
                                        onChange={handleCheckboxesValue}
                                        value={optionDetail.text}
                                        disabled={!preview}
                                    />
                                )}
                                {option === "Multiple choice" && (
                                    <Radio
                                        checked={
                                            selectedMultiValue ===
                                            optionDetail.text
                                        }
                                        onChange={handleMultiValue}
                                        value={optionDetail.text}
                                        disabled={!preview}
                                    />
                                )}
                                {option === "Dropdown" && !preview && (
                                    <span>{index + 1}. </span>
                                )}
                                <input
                                    disabled={preview}
                                    defaultValue={optionDetail.text}
                                    onChange={(e) =>
                                        handleEditOption(
                                            id,
                                            optionDetail.id,
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            {/* Cancel/Delete option button */}
                            {selectedQuestion.id === id &&
                                optionDetails.length > 1 && (
                                    <div
                                        className="cursor-pointer"
                                        title="Cancel option"
                                        onClick={() => {
                                            if (optionDetails.length > 1) {
                                                handleDeleteOptionDetail(
                                                    id,
                                                    optionDetail.id
                                                );
                                            }
                                        }}
                                    >
                                        <ImCross className="text-gray-500" />
                                    </div>
                                )}
                        </li>
                    );
                })
            )}

            {/* Add Option and Add others button */}
            {!optionDetails?.find((x) => x.text === "others") &&
                !preview &&
                isSelected(selectedQuestion.id, id) && (
                    <li className="font-medium mt-1 ml-3">
                        <button
                            onClick={handleAddChoice}
                            className="opacity-95"
                        >
                            Add option
                        </button>{" "}
                        <span>or</span>{" "}
                        <button
                            onClick={handleAddOther}
                            className="text-blueText font-medium"
                        >
                            add "Other"
                        </button>
                    </li>
                )}
        </ul>
    );
};

export default MCD;
