import { Fragment } from "react";
import {
    OptionDetailsType,
    useQuestions,
} from "../../../context/questionsContext";
// Material-Ui Imports
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

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
    const { handleUpdateOptionsDetails } = useQuestions();

    // Handlers
    const handleAddCheckbox = () => {
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
        <FormControl component="fieldset">
            {optionDetails.map((checkbox) => {
                if (checkbox.text === "others") {
                    return (
                        <FormControlLabel
                            disabled={isDisable}
                            key="others"
                            control={<Checkbox />}
                            label={
                                <TextField
                                    disabled={isDisable}
                                    defaultValue="Others..."
                                />
                            }
                        />
                    );
                }

                return (
                    <FormControlLabel
                        disabled={isDisable}
                        key={checkbox.id}
                        control={<Checkbox />}
                        label={
                            <TextField
                                disabled={!isDisable}
                                defaultValue={checkbox.text}
                            />
                        }
                    />
                );
            })}
            {!hasOthers && isDisable && (
                <FormControlLabel
                    disabled
                    control={<Checkbox />}
                    label={
                        <Fragment>
                            <button onClick={handleAddCheckbox}>
                                Add option
                            </button>{" "}
                            <span>or</span>{" "}
                            <button onClick={handleAddOther}>
                                add "Other"
                            </button>
                        </Fragment>
                    }
                />
            )}
        </FormControl>
    );
};

export default Checkboxes;
