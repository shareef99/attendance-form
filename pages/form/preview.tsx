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
                <>
                    <span key={index}>{x.text}</span> <br />
                </>
            ))}
        </div>
    );
};

export default Preview;
