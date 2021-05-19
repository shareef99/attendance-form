import Radio from "@material-ui/core/Radio";
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

export interface FormValues {
    optionDetails: Array<OptionDetailsType>;
}

const MultipleChoice = (props: Props) => {
    const { id, isDisable, optionDetails, hasOthers, handleSetHasOthers } =
        props;

    // Context
    const { handleUpdateOptionsDetails, handleEditOption } = useQuestions();

    // Handlers
    const handleAddChoice = (e: any) => {
        e.preventDefault();

        const lastIndex: number = optionDetails.length - 1;
        handleUpdateOptionsDetails(id, {
            id: optionDetails[lastIndex]?.id + 1,
            text: "option " + (optionDetails[lastIndex]?.id + 1),
        });
    };

    const handleAddOther = (e: any) => {
        e.preventDefault();

        const lastIndex: number = optionDetails.length - 1;
        handleSetHasOthers(true);
        handleUpdateOptionsDetails(id, {
            id: optionDetails[lastIndex]?.id + 1,
            text: "others",
        });
    };

    return (
        <form>
            <ul>
                {optionDetails.map((optionDetail) => {
                    if (optionDetail.text === "others") {
                        return (
                            <li key="others">
                                <Radio disabled={isDisable} />
                                <input
                                    disabled
                                    defaultValue={
                                        isDisable ? "Other: " : "Others..."
                                    }
                                />
                            </li>
                        );
                    }
                    return (
                        <li key={optionDetail.id}>
                            <Radio disabled={isDisable} />
                            <input
                                disabled={!isDisable}
                                defaultValue={optionDetail.text}
                                onChange={(e) =>
                                    handleEditOption(
                                        id,
                                        optionDetail.id,
                                        e.target.value
                                    )
                                }
                            />
                        </li>
                    );
                })}
                {!hasOthers && isDisable && (
                    <li>
                        <button onClick={handleAddChoice}>Add option</button>{" "}
                        <span>or</span>{" "}
                        <button onClick={handleAddOther}>add "Other"</button>
                    </li>
                )}
            </ul>
        </form>
    );
};

export default MultipleChoice;
