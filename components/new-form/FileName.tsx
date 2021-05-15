import { Fragment, useState } from "react";

// React-Icons Import(s)
import { HiPencil } from "react-icons/hi";

// React Hook Form Import(S)
import { SubmitHandler, useForm } from "react-hook-form";

// Form Context import
import { useFormContext } from "../../context/formContext";

interface Props {}

interface InputType {
    fileName: string;
}

const FileName = (props: Props) => {
    // Context
    const { formTitle, handleFormTitle } = useFormContext();

    // State
    const [isEditingFileName, setIsEditingFileName] = useState<boolean>(false);

    // React-hook-form
    const { register, handleSubmit } = useForm<InputType>();

    const onSubmit: SubmitHandler<InputType> = (data) => {
        const newFileName = data.fileName;
        handleFormTitle(newFileName);
        setIsEditingFileName(false);
    };

    // Handler Functions
    function handleEditFileName() {
        setIsEditingFileName(true);
    }

    return (
        <Fragment>
            <div
                className="rowCenter ml-4 cursor-pointer"
                onClick={handleEditFileName}
            >
                {isEditingFileName ? (
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            name="fileName"
                            id="fileName"
                            className="border-b-2"
                            {...register("fileName")}
                        />
                    </form>
                ) : (
                    <>
                        {formTitle ? formTitle : "Untitled"}{" "}
                        <HiPencil className="ml-1" />
                    </>
                )}
            </div>
        </Fragment>
    );
};

export default FileName;
