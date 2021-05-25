import { MouseEvent, useState } from "react";
import { QuestionType, useQuestions } from "../../context/questionsContext";
import { isSelected } from "../../helpers/question-utils";
import AddQuestion from "./AddQuestion";
import TitleNDescription from "./TitleNDescription/TitleNDescription";

interface Props {
    questions: Array<QuestionType>;
    preview?: boolean;
}

const QuestionsList = ({ questions, preview }: Props) => {
    const { selectedQuestion, handleSetSelectedQuestion } = useQuestions();

    const handleRemoveSelected = (
        e: MouseEvent<HTMLUListElement, globalThis.MouseEvent>
    ) => {
        // @ts-ignore, ignoring this warning as I know aria-label exists on this element
        if (e.target.ariaLabel !== "list") return;
        if (preview) return;
        handleSetSelectedQuestion(0, true);
    };

    const handleAddSelected = (id: number, state: boolean) => {
        if (preview) return;
        handleSetSelectedQuestion(id, state);
    };

    return (
        <ul
            className={` space-y-8 my-8`}
            aria-label="list"
            onClick={handleRemoveSelected}
        >
            {questions.map((question) => {
                const { id, option, optionIcon, title, description } = question;
                if (title || description || title === "") {
                    return (
                        <li
                            key="others"
                            onClick={() => handleAddSelected(id, true)}
                            className={`container p-8 bg-white rounded-lg shadow-md xl:max-w-[75%] 
                            transition transform duration-200 ease-in border-l-[8px] 2xl:max-w-[70%]
                             ${
                                 id === selectedQuestion.id
                                     ? "border-blue-500"
                                     : "border-transparent"
                             }`}
                            style={
                                id === 0
                                    ? {
                                          borderTopWidth: "8px",
                                          borderTopColor:
                                              "rgba(109, 40, 217, 1)",
                                      }
                                    : {}
                            }
                        >
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
                        key={id}
                        onClick={() => handleAddSelected(id, true)}
                        className={`container p-8 bg-white rounded-lg shadow-md xl:max-w-[75%]
                            transition transform duration-200 ease-in border-l-[8px] 2xl:max-w-[70%] ${
                                id === selectedQuestion.id
                                    ? "border-blue-500"
                                    : "border-transparent"
                            }`}
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
