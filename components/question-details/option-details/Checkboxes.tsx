import Checkbox from "@material-ui/core/Checkbox";
import { ImCross } from "react-icons/im";
import {
    OptionDetailsType,
    useQuestions,
} from "../../../context/questionsContext";

interface Props {
    id: number;
    isDisable: boolean;
    optionDetails: Array<OptionDetailsType>;
    hasOthers: boolean;
    handleSetHasOthers: (value: boolean) => void;
}

const Checkboxes = (props: Props) => {
    const { id, isDisable, optionDetails, hasOthers, handleSetHasOthers } =
        props;

    // Context
    const {
        handleUpdateOptionsDetails,
        handleEditOption,
        handleDeleteOptionDetail,
    } = useQuestions();

    // Handlers
    const handleAddCheckbox = (e: any) => {
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
                {optionDetails.map((checkbox) => {
                    if (checkbox.text === "others") {
                        return (
                            <li
                                key="others"
                                className="rowCenter justify-between"
                            >
                                <div>
                                    <Checkbox disabled={isDisable} />
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
                                                checkbox.id
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
                            key={checkbox.id}
                            className="rowCenter justify-between"
                        >
                            <div>
                                <Checkbox disabled={isDisable} />
                                <input
                                    disabled={!isDisable}
                                    defaultValue={checkbox.text}
                                    onChange={(e) =>
                                        handleEditOption(
                                            id,
                                            checkbox.id,
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
                                            checkbox.id
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
                        <button onClick={handleAddCheckbox}>Add option</button>{" "}
                        <span>or</span>{" "}
                        <button onClick={handleAddOther}>add "Other"</button>
                    </li>
                )}
            </ul>
        </form>
    );
};

export default Checkboxes;
