import { Fragment } from "react";
import {
    OptionDetailsType,
    useQuestions,
} from "../../../context/questionsContext";
// Material-Ui Imports
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";

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
    const { handleUpdateOptionsDetails } = useQuestions();

    // Handlers
    const handleAddChoice = () => {
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
            <RadioGroup aria-label="Multiple Choice" name="multiple-choice">
                {optionDetails.map((optionDetail) => {
                    if (optionDetail.text === "others") {
                        return (
                            <FormControlLabel
                                disabled
                                key={optionDetail.id}
                                control={<Radio />}
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
                        <Fragment>
                            <FormControlLabel
                                disabled
                                key="others"
                                control={<Radio />}
                                label={
                                    <TextField
                                        disabled={!isDisable}
                                        defaultValue={optionDetail.text}
                                    />
                                }
                            />
                        </Fragment>
                    );
                })}
                {!hasOthers && isDisable && (
                    <FormControlLabel
                        disabled
                        control={<Radio />}
                        label={
                            <Fragment>
                                <button onClick={() => handleAddChoice()}>
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
