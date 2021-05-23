import { FormEvent, Fragment } from "react";
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

const Dropdown = (props: Props) => {
    const { id, isDisable, optionDetails, hasOthers, handleSetHasOthers } =
        props;

    // Context
    const {
        handleUpdateOptionsDetails,
        handleEditOption,
        handleDeleteOptionDetail,
    } = useQuestions();

    // Handlers
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const lastIndex: number = optionDetails.length - 1;
        handleUpdateOptionsDetails(id, {
            id: optionDetails[lastIndex]?.id + 1,
            text: "option " + (optionDetails[lastIndex]?.id + 1),
        });
    };

    const handleAddOther = () => {
        const lastIndex: number = optionDetails.length - 1;
        handleSetHasOthers(true);
        handleUpdateOptionsDetails(id, {
            id: optionDetails[lastIndex]?.id + 1,
            text: "others",
        });
    };

    return (
        <form className="" onSubmit={handleSubmit}>
            <ul className="space-y-4">
                {optionDetails.map((dropdown, index) => {
                    if (dropdown.text === "others") {
                        return (
                            <li
                                key="others"
                                className="rowCenter justify-between"
                            >
                                <div>
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
                                                dropdown.id
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
                            key={dropdown.id}
                            className="rowCenter justify-between"
                        >
                            <div>
                                {index + 1}.{" "}
                                <input
                                    type="text"
                                    disabled={!isDisable}
                                    defaultValue={dropdown.text}
                                    onChange={(e) =>
                                        handleEditOption(
                                            id,
                                            dropdown.id,
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
                                            dropdown.id
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
                    <Fragment>
                        <button type="submit">Add option</button>{" "}
                        <span>or</span>{" "}
                        <button onClick={handleAddOther}>add "Other"</button>
                    </Fragment>
                )}
            </ul>
        </form>
    );
};

export default Dropdown;
