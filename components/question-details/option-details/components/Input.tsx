import { InputBase, InputBaseProps, withStyles } from "@material-ui/core";
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

const TextInput = withStyles({
    "& .MuiInputBase-input .Mui-disabled": {
        color: "rgba(0, 0, 0, 1)",
    },
    // @ts-ignore
})(InputBase);

const Input = ({ id, preview, optionDetail, other }: Props) => {
    // Context
    const { handleEditOption } = useQuestions();

    return (
        <TextInput
            type="text"
            disabled={preview}
            defaultValue={
                optionDetail?.text ||
                (other && preview ? "Others..." : "Other: ")
            }
            onChange={(e) =>
                handleEditOption(id, optionDetail.id, e.target.value)
            }
            fullWidth={true}
            multiline={true}
        />
    );
};

export default Input;
