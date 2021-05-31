import {
    OptionDetailsType,
    useQuestions,
} from "../../../../context/questionsContext";

interface Props {
    id: number;
    optionDetails: Array<OptionDetailsType>;
}

const AddButton = ({ id, optionDetails }: Props) => {
    // Context
    const { handleUpdateOptionsDetails } = useQuestions();

    // Handlers
    const handleAddChoice = () => {
        const lastIndex: number = optionDetails?.length - 1;
        handleUpdateOptionsDetails(id, {
            id: optionDetails[lastIndex]?.id + 1,
            text: "option " + (optionDetails[lastIndex]?.id + 1),
        });
    };

    const handleAddOther = () => {
        const lastIndex: number = optionDetails?.length - 1;
        handleUpdateOptionsDetails(id, {
            id: optionDetails[lastIndex]?.id + 1,
            text: "others",
        });
    };

    return (
        <li className="font-medium mt-1 ml-3">
            <button onClick={handleAddChoice} className="opacity-95">
                Add option
            </button>{" "}
            <span>or</span>{" "}
            <button
                onClick={handleAddOther}
                className="text-blueText font-medium"
            >
                add "Other"
            </button>
        </li>
    );
};

export default AddButton;
