import { useState } from "react";
import { QuestionType } from "../../context/questionsContext";
import AddQuestion from "./AddQuestion";
import TitleNDescription from "./TitleNDescription";

interface Props {
    questions: Array<QuestionType>;
    preview?: boolean;
}

const QuestionsList = ({ questions, preview }: Props) => {
    return (
        <ul className="space-y-8 my-8">
            {questions.map((question) => {
                const { id, option, optionIcon, title, description } = question;
                if (title || description || title === "") {
                    return (
                        <li className="container p-8 colCenter items-start space-y-8">
                            <TitleNDescription
                                id={id}
                                preview={preview}
                                title={title}
                                description={description}
                            />
                        </li>
                    );
                }
                return (
                    <li
                        className="container p-8 bg-white rounded-lg shadow-md md:max-w-[60%]"
                        key={id}
                    >
                        <AddQuestion
                            preview={preview}
                            id={id}
                            option={option}
                            Icon={optionIcon}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default QuestionsList;
