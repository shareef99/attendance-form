import { Fragment, useState } from "react";

// Material-Ui Imports
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";

interface Props {}

const MultipleChoice = (props: Props) => {
    // State
    const [choices, setChoices] = useState<any[]>([""]);
    const [hasOthers, setHasOthers] = useState<boolean>(false);

    // Handlers
    const handleAddChoice = () => {
        setChoices((prevChoices) => [...prevChoices, ""]);
    };

    const handleAddOther = () => {
        setChoices((prevChoices) => [...prevChoices, "others"]);
        setHasOthers(true);
    };

    // Others
    console.log(choices);

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="Multiple Choice" name="multiple-choice">
                {choices.map((choice, index) => {
                    if (choice === "others") {
                        return (
                            <FormControlLabel
                                disabled
                                key={index}
                                value={index}
                                control={<Radio />}
                                label={
                                    <TextField
                                        disabled
                                        defaultValue="Others..."
                                    />
                                }
                            />
                        );
                    }

                    return (
                        <FormControlLabel
                            disabled
                            key={index}
                            value={index}
                            control={<Radio />}
                            label={
                                <TextField
                                    defaultValue={"option " + (index + 1)}
                                />
                            }
                        />
                    );
                })}
                {!hasOthers && (
                    <FormControlLabel
                        disabled
                        control={<Radio />}
                        label={
                            <Fragment>
                                <button onClick={handleAddChoice}>
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
            </RadioGroup>
        </FormControl>
    );
};

export default MultipleChoice;
