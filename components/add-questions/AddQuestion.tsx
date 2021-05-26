// Types
import { IconType } from "react-icons";
// React-Icon imports
import { RiImageAddFill } from "react-icons/ri";
// React Components imports
import Options from "./Options";
import QuestionDetails from "../question-details/QuestionDetails";
import Question from "./Question";
import QuestionFooter from "./QuestionFooter";
// Helper functions
import { isSelected } from "../../helpers/question-utils";
// Context
import { useQuestions } from "../../context/questionsContext";
// Material UI
import Input from "@material-ui/core/Input";
import { useEffect, useState } from "react";

interface Props {
    id?: number;
    option?: string;
    preview?: boolean;
    Icon?: IconType;
    description: string;
}

const AddQuestion = ({ id, option, preview, Icon, description }: Props) => {
    const {
        selectedQuestion,
        handleUpdateDescription,
        handleAddDescription,
        handleRemoveDescription,
    } = useQuestions();

    return (
        <div
            className={`${
                isSelected(selectedQuestion.id, id) ? "space-y-8" : "space-y-4"
            }`}
        >
            <div
                className="rowCenter justify-between items-baseline flex-wrap space-x-4 space-y-4 
                    sm:space-y-0"
            >
                <Question id={id} preview={preview} />
                {isSelected(selectedQuestion.id, id) && (
                    <>
                        <RiImageAddFill
                            style={{ width: "1.5rem", height: "2rem" }}
                            title="Insert Image"
                            className="self-center"
                        />
                        <Options
                            preview={preview}
                            id={id}
                            option={option}
                            Icon={Icon}
                        />
                    </>
                )}
            </div>
            {description !== undefined && (
                <Input
                    type="text"
                    placeholder="Description (optional)"
                    fullWidth={true}
                    readOnly={preview || !isSelected(selectedQuestion.id, id)}
                    defaultValue={description}
                    onChange={(e) => {
                        handleUpdateDescription(id, e.target.value);
                    }}
                />
            )}
            <QuestionDetails
                id={id}
                option={option}
                Icon={Icon}
                preview={preview}
            />
            {isSelected(selectedQuestion.id, id) && (
                <>
                    <div className="border-b-[3px]" />
                    <QuestionFooter id={id} />
                </>
            )}
        </div>
    );
};

export default AddQuestion;
