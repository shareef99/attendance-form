import { useFormContext } from "../../context/formContext";

interface Props {
    preview?: boolean;
    className?: string;
}

const FormName = ({ preview, className }: Props) => {
    // Context
    const { formTitle, handleFormTitle } = useFormContext();

    // Handler Functions
    function handleEditFileName(e: any) {
        handleFormTitle(e.target.value);
        console.log(e.target.key);

        if (preview) {
            return;
        }
    }

    return (
        <div
            className={`rowCenter ml-4 cursor-pointer ${className}`}
            onClick={handleEditFileName}
        >
            {preview ? (
                formTitle ? (
                    <span className="w-min">{formTitle}</span>
                ) : (
                    <span className="w-min">Untitled</span>
                )
            ) : (
                <input
                    type="text"
                    name="fileName"
                    id="fileName"
                    className="focus:border-b-4 focus:border-purpleColor w-min"
                    defaultValue={formTitle || "Untitled"}
                    onChange={handleEditFileName}
                />
            )}
        </div>
    );
};

export default FormName;
