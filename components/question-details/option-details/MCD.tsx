import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
// React-Icons
import { ImCross } from "react-icons/im";
import { MdArrowDropDown } from "react-icons/md";
// Context
import { useOptions } from "../../../context/optionsContext";
import {
    OptionDetailsType,
    useQuestions,
} from "../../../context/questionsContext";
// helpers
import { isSelected } from "../../../helpers/question-utils";
// Material-UI imports
import Checkbox from "@material-ui/core/Checkbox";
import Fade from "@material-ui/core/Fade";
import Radio from "@material-ui/core/Radio";
import { DropdownMenu } from "../../material-ui/DropdownMenu";
import { DropdownMenuItem } from "../../material-ui/DropdownMenuItem";
import { DropdownButton } from "../../material-ui/DropdownButton";

interface Props {
    id: number;
    preview: boolean;
    option: string;
    optionDetails: Array<OptionDetailsType>;
    answer: string | Array<string>;
}

const MCD = ({ id, preview, optionDetails, option, answer }: Props) => {
    // States
    const [selectedMultiValue, setSelectedMultiValue] = useState<string>(
        typeof answer === typeof "" ? (answer as string) : null
    );
    const [selectedCheckboxesValue, setSelectedCheckboxesValue] = useState<
        Array<string>
    >(
        typeof answer === typeof []
            ? (answer as Array<string>).map((x) => x)
            : []
    );
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
    };

    // Effects
    useEffect(() => {
        // This effect update the checkbox value after state is updated successfully
        // The if exception prevent assigning initial value of state
        if (selectedCheckboxesValue.length === 0) return;
        handleSubmitAnswer(id, selectedCheckboxesValue);
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
                                onClick={(e) => handleDropdownClose(e)}
                                value={optionDetail.text}
                            >
                                {optionDetail.text}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenu>
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
                                                preview &&
                                                selectedMultiValue ===
                                                    optionDetail.text
                                            }
                                            onChange={handleMultiValue}
                                            value={optionDetail.text}
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
                                        checked={
                                            preview &&
                                            selectedCheckboxesValue.includes(
                                                optionDetail.text
                                            )
                                        }
                                        onChange={handleCheckboxesValue}
                                        value={optionDetail.text}
                                        disabled={!preview}
                                    />
                                )}
                                {option === "Multiple choice" && (
                                    <Radio
                                        checked={
                                            preview &&
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
