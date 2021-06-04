import React from "react";
import { ImCross } from "react-icons/im";
import { useQuestions } from "../../../../context/questionsContext";
import { updateOptions } from "../../../../helpers/firebase/question";
import { OptionDetailsType } from "../../../../interface/questions";

interface Props {
    docId: string;
    id: number;
    optionCount: number;
    optionId: number;
    allOptions: Array<OptionDetailsType>;
}

const DeleteButton = (props: Props) => {
    const { docId, id, optionCount, optionId, allOptions } = props;
    const { selectedQuestion } = useQuestions();

    return (
        selectedQuestion.id === id &&
        optionCount > 1 && (
            <div
                className="cursor-pointer"
                title="Cancel option"
                onClick={() => {
                    const options = allOptions.filter((x) => x.id !== optionId);
                    updateOptions(docId, options);
                }}
            >
                <ImCross className="text-gray-500" />
            </div>
        )
    );
};

export default DeleteButton;
