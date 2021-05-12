import React, { ReactElement } from "react";
import { useForm } from "../../context/formContext";
import AddQuestion from "./AddQuestion";

interface Props {
    questions: Array<ReactElement>;
}

const QuestionsList = ({ questions }: Props) => {
    return (
        <ul>
            {questions.map((question, index) => (
                // <question />
                <AddQuestion key={index} />
            ))}
        </ul>
    );
};

export default QuestionsList;
