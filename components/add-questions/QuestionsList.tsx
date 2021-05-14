import React, { ReactElement } from "react";
import AddQuestion from "./AddQuestion";

interface Props {
    questions: Array<ReactElement>;
}

const QuestionsList = ({ questions }: Props) => {
    return (
        <ul>
            {questions.map((question, index) => (
                <AddQuestion key={index} />
            ))}
        </ul>
    );
};

export default QuestionsList;
