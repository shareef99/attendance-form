import { FormEvent, Fragment } from "react";

// Material-Ui Imports
import TextField from "@material-ui/core/TextField";

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
    option: OptionType;
}

const Dropdown = (props: Props) => {
    const { id, isDisable, optionDetails, hasOthers, handleSetHasOthers } =
        props;

    // Context
    const { handleUpdateOptionsDetails } = useQuestions();

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
            {optionDetails.map((dropdown) => {
                if (dropdown.text === "others") {
                    return (
                        <TextField
                            key={dropdown.id}
                            disabled={isDisable}
                            defaultValue="Others..."
                        />
                    );
                }
                return (
                    <div className="" key={dropdown.id}>
                        {dropdown.id}.{" "}
                        <TextField
                            disabled={!isDisable}
                            defaultValue={dropdown.text}
                        />
                    </div>
                );
            })}
            {!hasOthers && isDisable && (
                <Fragment>
                    <button type="submit">Add option</button> <span>or</span>{" "}
                    <button onClick={handleAddOther}>add "Other"</button>
                </Fragment>
            )}
        </form>
    );
};

export default Dropdown;
