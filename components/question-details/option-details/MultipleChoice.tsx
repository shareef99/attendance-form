import Radio from "@material-ui/core/Radio";
import {
    OptionDetailsType,
    useQuestions,
} from "../../../context/questionsContext";
import { ImCross } from "react-icons/im";

interface Props {
    id: number;
    isDisable: boolean;
    optionDetails: Array<OptionDetailsType>;
    hasOthers: boolean;
    handleSetHasOthers: (value: boolean) => void;
}

const MultipleChoice = (props: Props) => {
    const { id, isDisable, optionDetails, hasOthers, handleSetHasOthers } =
        props;

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
                {optionDetails.map((optionDetail) => {
                    if (optionDetail.text === "others") {
                        return (
                            <li
                                key="others"
                                className="rowCenter justify-between"
                            >
                                <div>
                                    <Radio disabled={isDisable} />
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
                                <Radio disabled={isDisable} />
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

export default MultipleChoice;
