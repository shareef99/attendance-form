import { OptionDetailsType } from "../../../../interface/questions";
import { addOption } from "../../../../helpers/firebase/question";

interface Props {
    docId: string;
    optionDetails: Array<OptionDetailsType>;
}

const AddButton = ({ docId, optionDetails }: Props) => {
    const handleAddChoice = () => {
        const lastIndex: number = optionDetails?.length - 1;
        addOption(docId, [
            ...optionDetails,
            {
                id: optionDetails[lastIndex]?.id + 1,
                text: "option " + (optionDetails[lastIndex]?.id + 1),
            },
        ]);
    };

    const handleAddOther = () => {
        const lastIndex: number = optionDetails?.length - 1;
        addOption(docId, [
            ...optionDetails,
            {
                id: optionDetails[lastIndex]?.id + 1,
                text: "others",
            },
        ]);
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
