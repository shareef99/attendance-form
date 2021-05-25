// Material-Ui Imports
import { Input } from "@material-ui/core";
// import Input from "@material-tailwind/react/Input";

// Types
import { OptionType } from "../../add-questions/Options";

interface Props {
    isDisable: boolean;
}

const ShortAnswer = ({ isDisable }: Props) => {
    return (
        <Input
            type="text"
            placeholder="Short answer text"
            className="w-full"
            disabled={isDisable}
        />
    );
};

export default ShortAnswer;
