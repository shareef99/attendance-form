import {
    OptionDetailsType,
    useQuestions,
} from "../../../../context/questionsContext";

interface Props {
    id?: number;
    preview?: boolean;
    optionDetail?: OptionDetailsType;
    other?: boolean;
}

const Input = ({ id, preview, optionDetail, other }: Props) => {
    // Context
    const { handleEditOption } = useQuestions();

    return (
        <input
            type="text"
            disabled={preview || other}
            defaultValue={
                optionDetail?.text ||
                (other && preview ? "Others..." : "Other: ")
            }
            onChange={(e) =>
                handleEditOption(id, optionDetail.id, e.target.value)
            }
        />
    );
};

export default Input;
