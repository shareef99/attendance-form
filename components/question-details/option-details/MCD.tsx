import { Checkbox, Radio } from "@material-ui/core";
import React from "react";
import { ImCross } from "react-icons/im";
import {
    OptionDetailsType,
    useQuestions,
} from "../../../context/questionsContext";

interface Props {
    id: number;
    isDisable: boolean;
    option: string;
    optionDetails: Array<OptionDetailsType>;
    hasOthers: boolean;
    handleSetHasOthers: (value: boolean) => void;
}

const MCD = (props: Props) => {
    const {
        id,
        isDisable,
        optionDetails,
        hasOthers,
        handleSetHasOthers,
        option,
    } = props;

    // Context
    const {
        handleUpdateOptionsDetails,
        handleEditOption,
        handleDeleteOptionDetail,
    } = useQuestions();

    // Handlers
    const handleAddChoice = (e: any) => {
        e.preventDefault();

        const largestId = optionDetails.sort((a, b) => a.id - b.id)[
            optionDetails.length - 1
        ].id;
        handleUpdateOptionsDetails(id, {
            id: largestId + 1,
            text: "option " + (largestId + 1),
        });
    };

    const handleAddOther = (e: any) => {
        e.preventDefault();

        const lastIndex: number = optionDetails.length - 1;
        handleSetHasOthers(true);
        handleUpdateOptionsDetails(id, {
            id: optionDetails[lastIndex]?.id + 1,
            text: "others",
        });
    };

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
                                <div>
                                    {option === "Checkboxes" && (
                                        <Checkbox disabled={isDisable} />
                                    )}
                                    {option === "Multiple choice" && (
                                        <Radio disabled={isDisable} />
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
                            </li>
                        );
                    }
                    return (
                        <li
                            key={optionDetail.id}
                            className="rowCenter justify-between"
                        >
                            <div>
                                {option === "Checkboxes" && (
                                    <Checkbox disabled={isDisable} />
                                )}
                                {option === "Multiple choice" && (
                                    <Radio disabled={isDisable} />
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
                        </li>
                    );
                })}
                {!hasOthers && isDisable && (
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
