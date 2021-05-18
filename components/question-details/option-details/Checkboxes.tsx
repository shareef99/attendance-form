import { useState, Fragment } from "react";

// Material-Ui Imports
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

// Types
import { OptionType } from "../../add-questions/Options";

interface Props {
    option: OptionType;
    preview: boolean;
    isDisable: boolean;
}

const Checkboxes = ({ option, preview, isDisable }: Props) => {
    // States
    const [checkboxes, setCheckboxes] = useState<Array<any>>([""]);
    const [hasOthers, setHasOthers] = useState<boolean>(false);

    // Handlers
    const handleAddCheckbox = () => {
        setCheckboxes((prevCheckboxes) => [...prevCheckboxes, ""]);
    };

    const handleAddOther = () => {
        setCheckboxes((prevCheckboxes) => [...prevCheckboxes, "others"]);
        setHasOthers(true);
    };

    return (
        <FormControl component="fieldset">
            {checkboxes.map((checkbox, index) => {
                if (checkbox === "others") {
                    return (
                        <FormControlLabel
                            disabled={isDisable}
                            key={index}
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
                        key={index}
                        control={<Checkbox />}
                        label={
                            <TextField defaultValue={"option " + (index + 1)} />
                        }
                    />
                );
            })}
            {!hasOthers && (
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
