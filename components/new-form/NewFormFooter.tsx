import React from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { MdTextFields } from "react-icons/md";
import { RiImageAddFill, RiVideoAddFill } from "react-icons/ri";
import { useForm } from "../../context/formContext";
import classes from "../../styles/components/new-form/new-form-footer.module.scss";

interface Props {}

const NewFormFooter = ({}: Props) => {
    const { handleAddQuestions } = useForm();

    return (
        <footer className="rowCenter">
            <div
                className={`absolute bottom-0 left-auto right-auto rowCenter space-x-8 h-14 container
                    ${classes.newFormFooterIcons}`}
            >
                <HiOutlinePlusCircle
                    title="Add Question"
                    onClick={() => handleAddQuestions()}
                />
                <MdTextFields title="Add title and description" />
                <RiImageAddFill title="Add Image" />
                <RiVideoAddFill title="Add YouTube Video" />
            </div>
        </footer>
    );
};

export default NewFormFooter;
