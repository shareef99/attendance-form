import Checkbox from "@material-ui/core/Checkbox";
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

const Checkboxes = (props: Props) => {
    const { id, isDisable, optionDetails, hasOthers, handleSetHasOthers } =
        props;

    // Context
    const { handleUpdateOptionsDetails, handleEditOption } = useQuestions();

    // Handlers
    const handleAddCheckbox = (e: any) => {
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
                {optionDetails.map((checkbox) => {
                    if (checkbox.text === "others") {
                        return (
                            <li key="others">
                                <Checkbox disabled={isDisable} />
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
                        <li key={checkbox.id}>
                            <Checkbox disabled={isDisable} />
                            <input
                                disabled={!isDisable}
                                defaultValue={checkbox.text}
                                onChange={(e) =>
                                    handleEditOption(
                                        id,
                                        checkbox.id,
                                        e.target.value
                                    )
                                }
                            />
                        </li>
                    );
                })}
                {!hasOthers && isDisable && (
                    <li>
                        <button onClick={handleAddCheckbox}>Add option</button>{" "}
                        <span>or</span>{" "}
                        <button onClick={handleAddOther}>add "Other"</button>
                    </li>
                )}
            </ul>
        </form>
    );
};

export default Checkboxes;
