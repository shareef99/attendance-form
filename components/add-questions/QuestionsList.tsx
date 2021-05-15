import React, { ReactNode, useState } from "react";
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
                </li>
            ))}
        </ul>
    );
};

export default QuestionsList;
