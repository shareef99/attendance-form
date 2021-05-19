import { FormEvent, Fragment } from "react";
// Types
import { OptionType } from "../../add-questions/Options";
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

const Dropdown = (props: Props) => {
    const { id, isDisable, optionDetails, hasOthers, handleSetHasOthers } =
        props;

    // Context
    const { handleUpdateOptionsDetails, handleEditOption } = useQuestions();

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
            <ul>
                {optionDetails.map((dropdown) => {
                    if (dropdown.text === "others") {
                        return (
                            <li key="others">
                                <input
                                    type="text"
                                    disabled
                                    defaultValue={
                                        isDisable ? "Other: " : "Others..."
                                    }
                                />
                            </li>
                        );
                    }
                    return (
                        <li key={dropdown.id}>
                            {dropdown.id}.{" "}
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
