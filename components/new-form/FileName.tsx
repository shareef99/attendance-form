import { Fragment, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {}

interface InputType {
    fileName: string;
}

const FileName = (props: Props) => {
    // State
    const [fileName, setFileName] = useState<string>("Untitled");
    const [isEditingFileName, setIsEditingFileName] = useState<boolean>(false);

    // Refs
    // const fileNameRef = useRef<HTMLInputElement>();

    // React-hook-form
    const { register, handleSubmit, watch } = useForm<InputType>();

    const onSubmit: SubmitHandler<InputType> = (data) => {
        // const newFileName = fileNameRef.current.value;
        const newFileName = data.fileName;
        setFileName(newFileName);
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
                        {fileName ? fileName : "Untitled"}{" "}
                        <HiPencil className="ml-1" />
                    </>
                )}
            </div>
        </Fragment>
    );
};

export default FileName;
