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

        const lastIndex: number = optionDetails.length - 1;
        handleUpdateOptionsDetails(id, {
            id: optionDetails[lastIndex]?.id + 1,
            text: "option " + (optionDetails[lastIndex]?.id + 1),
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
            <ul>
                {optionDetails.map((optionDetail, index) => {
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
                            <div
                                style={
                                    option === "Dropdown" && {
                                        padding: ".5rem 0px",
                                    }
                                }
                            >
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
                    <li>
                        <button onClick={handleAddChoice}>Add option</button>{" "}
                        <span>or</span>{" "}
                        <button onClick={handleAddOther}>add "Other"</button>
                    </li>
                )}
            </ul>
        </form>
    );
};

export default MCD;
