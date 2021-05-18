import { Fragment, useState } from "react";
import { useQuestions } from "../../../context/questionsContext";
// Material-Ui Imports
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";

interface Props {
    id: number;
    preview: boolean;
}

const MultipleChoice = ({ id, preview }: Props) => {
    // Context
    const { handleUpdateOptionsDetails, questions } = useQuestions();

    // State
    const [hasOthers, setHasOthers] = useState<boolean>(
        questions[id].optionDetails.some((x) => x.text === "others")
    );

    // Handlers
    const handleAddChoice = () => {
        const lastIndex: number = questions[id].optionDetails.length - 1;
        handleUpdateOptionsDetails(id, {
            id: questions[id]?.optionDetails[lastIndex]?.id + 1,
            text: "option " + (questions[id].optionDetails[lastIndex]?.id + 1),
        });
    };

    const handleAddOther = () => {
        const lastIndex: number = questions[id].optionDetails.length - 1;
        setHasOthers(true);
        handleUpdateOptionsDetails(id, {
            id: questions[id]?.optionDetails[lastIndex]?.id + 1,
            text: "others",
        });
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="Multiple Choice" name="multiple-choice">
                {questions[id].optionDetails.map((optionDetail) => {
                    if (optionDetail.text === "others") {
                        return (
                            <FormControlLabel
                                disabled
                                key={optionDetail.id}
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
                        <Fragment>
                            <FormControlLabel
                                disabled
                                key="others"
                                control={<Radio />}
                                label={
                                    <TextField
                                        defaultValue={optionDetail.text}
                                    />
                                }
                            />
                        </Fragment>
                    );
                })}
                {!hasOthers && !preview && (
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
