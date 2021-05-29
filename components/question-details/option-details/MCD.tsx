import { Checkbox, Radio } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { useOptions } from "../../../context/optionsContext";
import {
    OptionDetailsType,
    useQuestions,
} from "../../../context/questionsContext";
import { isSelected } from "../../../helpers/question-utils";

interface Props {
    id: number;
    isDisable: boolean;
    option: string;
    optionDetails: Array<OptionDetailsType>;
}

const MCD = ({ id, isDisable, optionDetails, option }: Props) => {
    // States
    const [selectedMultiValue, setSelectedMultiValue] = useState<string>(null);
    const [selectedCheckboxesValue, setSelectedCheckboxesValue] = useState<
        Array<string>
    >([]);

    // Context
    const {
        handleUpdateOptionsDetails,
        handleEditOption,
        handleDeleteOptionDetail,
        selectedQuestion,
    } = useQuestions();
    const { handleMultiAnswer, handleCheckboxesAnswer } = useOptions();

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
        handleMultiAnswer(id, e.target.value);
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

    // Effects
    useEffect(() => {
        handleCheckboxesAnswer(id, selectedCheckboxesValue);
    }, [selectedCheckboxesValue]);

    return (
        <form>
            <ul
                className={`${
                    option === "Dropdown" ? "space-y-4" : "space-y-0"
                }`}
            >
                {optionDetails?.map((optionDetail, index) => {
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
                                            disabled={isDisable}
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
                                            disabled={isDisable}
                                        />
                                    )}
                                    {option === "Dropdown" && (
                                        <span>{index + 1}. </span>
                                    )}
                                    <input
                                        type="text"
                                        disabled
                                        defaultValue={
                                            isDisable ? "Other: " : "Others..."
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
                                        onChange={(e) =>
                                            handleCheckboxesValue(e)
                                        }
                                        value={optionDetail.text}
                                        disabled={isDisable}
                                    />
                                )}
                                {option === "Multiple choice" && (
                                    <Radio
                                        checked={
                                            selectedMultiValue ===
                                            optionDetail.text
                                        }
                                        onChange={(e) => handleMultiValue(e)}
                                        value={optionDetail.text}
                                        disabled={isDisable}
                                    />
                                )}
                                {option === "Dropdown" && (
                                    <span>{index + 1}. </span>
                                )}
                                <input
                                    disabled={!isDisable}
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
                })}
                {/* Add Option and Add others button */}
                {!optionDetails?.find((x) => x.text === "others") &&
                    isDisable &&
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
        </form>
    );
};

export default MCD;
