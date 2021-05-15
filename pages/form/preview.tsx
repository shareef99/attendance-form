import React from "react";
import { useQuestions } from "../../context/questionsContext";

interface Props {}

const Preview = (props: Props) => {
    // Context
    const { multipleChoice } = useQuestions();
    console.log(multipleChoice);

    return (
        <div>
            {multipleChoice.map((x, index) => (
                <div key={index}>
                    <span>{x.text}</span> <br />
                </div>
            ))}
        </div>
    );
};

export default Preview;
