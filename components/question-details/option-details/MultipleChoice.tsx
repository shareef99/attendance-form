import { Fragment, useEffect, useState } from "react";

// Material-Ui Imports
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";

import { useQuestions } from "../../../context/questionsContext";

interface Props {}

export interface ChoiceType {
    id: string;
    text: string;
}

const MultipleChoice = (props: Props) => {
    // Context
    const { handleMultipleChoice, multipleChoice } = useQuestions();

    // State
    const [choices, setChoices] = useState<Array<ChoiceType>>([
        { id: "Default", text: "option 1" },
    ]);
    const [hasOthers, setHasOthers] = useState<boolean>(false);

    // Effects
    useEffect(() => {
        handleMultipleChoice(choices);
    }, [choices]);

    // Handlers
    const handleAddChoice = () => {
        setChoices((prevChoices) => [
            ...prevChoices,
            { id: "random", text: "random" },
        ]);
    };

    const handleAddOther = () => {
        setChoices((prevChoices) => [
            ...prevChoices,
            { id: "random", text: "others" },
        ]);
        setHasOthers(true);
    };

    // Others
    console.log({ choices, multipleChoice });

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="Multiple Choice" name="multiple-choice">
                {choices.map((choice, index) => {
                    if (choice.text === "others") {
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
