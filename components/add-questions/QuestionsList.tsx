import React, { ReactNode, useState } from "react";
import QuestionDetails from "../question-details/QuestionDetails";
import AddQuestion from "./AddQuestion";

interface Props {
    questions: Array<ReactNode>;
}

const QuestionsList = ({ questions }: Props) => {
    return (
        <ul>
            {questions.map((question, index) => (
                <li className="container" key={index}>
                    <AddQuestion />
                    {/* <QuestionDetails /> */}
                </li>
            ))}
        </ul>
    );
};

export default QuestionsList;
