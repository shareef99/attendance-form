import { useState } from "react";

// Material-Ui Imports
import TextField from "@material-ui/core/TextField";

// Types
import { OptionType } from "../../add-questions/Options";

interface Props {
    option: OptionType;
    preview: boolean;
}

const Dropdown = (props: Props) => {
    // States
    const [dropdowns, setDropdowns] = useState<Array<any>>([""]);

    // Handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        setDropdowns((prevCheckboxes) => [...prevCheckboxes, ""]);
    };

    return (
        <form className="colCenter" onSubmit={handleSubmit}>
            {dropdowns.map((dropdown, index) => (
                <div className="rowCenter" key={index}>
                    {index + 1}.
                    <TextField defaultValue={"option " + (index + 1)} />
                </div>
            ))}
            <button>Add option</button>
        </form>
    );
};

export default Dropdown;
