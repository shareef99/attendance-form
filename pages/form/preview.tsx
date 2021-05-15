import React from "react";

// Context
import { useFormContext } from "../../context/formContext";
import { useQuestions } from "../../context/questionsContext";

interface Props {}

const Preview = (props: Props) => {
    // Context
    const { questions, multipleChoice } = useQuestions();

    // Others
    console.log({ multipleChoice, questions });

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
