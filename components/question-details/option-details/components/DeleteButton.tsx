import React from "react";
import { ImCross } from "react-icons/im";
import { useQuestions } from "../../../../context/questionsContext";

interface Props {
    id: number;
    optionCount: number;
    optionId: number;
}

const DeleteButton = ({ id, optionCount, optionId }: Props) => {
    const { selectedQuestion, handleDeleteOptionDetail } = useQuestions();

    return (
        selectedQuestion.id === id &&
        optionCount > 1 && (
            <div
                className="cursor-pointer"
                title="Cancel option"
                onClick={() => {
                    handleDeleteOptionDetail(id, optionId);
                }}
            >
                <ImCross className="text-gray-500" />
            </div>
        )
    );
};

export default DeleteButton;
