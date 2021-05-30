import { ChangeEvent, useEffect, useState } from "react";
import { useOptions } from "../../../../context/optionsContext";
import Checkbox from "@material-ui/core/Checkbox";

interface Props {
    id: number;
    option: string;
    optionText: string;
    preview: boolean;
    answer: string | Array<string>;
}

const CheckboxInput = ({ id, option, optionText, preview, answer }: Props) => {
    // Context
    const { handleSubmitAnswer } = useOptions();

    // State
    const [selectedCheckboxesValue, setSelectedCheckboxesValue] = useState<
        Array<string>
    >(
        typeof answer === typeof []
            ? (answer as Array<string>).map((x) => x)
            : []
    );

    // Handlers
    const handleCheckboxesValue = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            console.log("Adding", e.target.value);

            setSelectedCheckboxesValue((prevState) => [
                ...prevState,
                e.target.value,
            ]);
        }

        if (!e.target.checked) {
            console.log("Removing", e.target.value);

            setSelectedCheckboxesValue(
                selectedCheckboxesValue.filter((x) => x !== e.target.value)
            );
        }
    };

    // Effects
    useEffect(() => {
        // This effect update the checkbox value after state is updated successfully
        // The if exception prevent assigning initial value of state
        if (selectedCheckboxesValue.length === 0) return;
        handleSubmitAnswer(id, selectedCheckboxesValue);
    }, [selectedCheckboxesValue]);

    return (
        option === "Checkboxes" && (
            <Checkbox
                checked={
                    preview && selectedCheckboxesValue.includes(optionText)
                }
                disabled={!preview}
                value={optionText}
                onChange={handleCheckboxesValue}
            />
        )
    );
};

export default CheckboxInput;
