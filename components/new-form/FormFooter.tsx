import React from "react";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { MdTextFields } from "react-icons/md";
import { RiImageAddFill, RiVideoAddFill } from "react-icons/ri";
import { useQuestions } from "../../context/questionsContext";
import classes from "../../styles/components/new-form/new-form-footer.module.scss";

interface Props {}

const FormFooter = ({}: Props) => {
    const { handleAddQuestions, handleAddTitleAndDescription } = useQuestions();

    return (
        <footer className="rowCenter sticky bottom-0">
            <div
                className={`rowCenter space-x-8 h-14 container ${classes.newFormFooterIcons}`}
            >
                <HiOutlinePlusCircle
                    title="Add Question"
                    onClick={handleAddQuestions}
                />
                <MdTextFields
                    title="Add title and description"
                    onClick={handleAddTitleAndDescription}
                />
                <RiImageAddFill title="Add Image" />
                <RiVideoAddFill title="Add YouTube Video" />
            </div>
        </footer>
    );
};

export default FormFooter;
