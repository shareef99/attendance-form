import { ChangeEvent, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { useFormContext } from "../../context/formContext";

interface Props {
    preview?: boolean;
}

const FormName = ({ preview }: Props) => {
    // Context
    const { formTitle, handleFormTitle } = useFormContext();

    // State
    const [isEditingFileName, setIsEditingFileName] = useState<boolean>(false);

    // Handler Functions
    // console.log(isEditingFileName);

    function handleEditFileName(e: any) {
        handleFormTitle(e.target.value);
        console.log(e.target.key);

        if (preview) {
            return;
        }
        // setIsEditingFileName(true);
    }

    return (
        <div
            className="rowCenter ml-4 cursor-pointer"
            onClick={handleEditFileName}
        >
            {preview ? (
                formTitle ? (
                    formTitle
                ) : (
                    "Untitled"
                )
            ) : (
                <input
                    type="text"
                    name="fileName"
                    id="fileName"
                    className="focus:border-b-4 focus:border-purpleColor "
                    defaultValue={formTitle || "Untitled"}
                    onChange={handleEditFileName}
                />
            )}
        </div>
    );
};

export default FormName;
