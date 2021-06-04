import { MouseEvent } from "react";
import { QuestionType, useQuestions } from "../../context/questionsContext";
import { getQuestions } from "../../helpers/firebase/question";
import { getIcon } from "../../helpers/question-utils";
import AddQuestion from "./AddQuestion";
import FormTitle from "./TitleNDescription/FormTitle";
import TitleNDescription from "./TitleNDescription/TitleNDescription";

interface Props {
    // questions: Array<QuestionType>;
    questions?: any;
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
                const {
                    docId,
                    id,
                    option,
                    title,
                    description,
                    isDescription,
                    errorMessage,
                } = question;

                const optionIcon = getIcon(option);

                if (title || title === "") {
                    return (
                        <li
                            key="others"
                            onClick={() => handleAddSelected(id, true)}
                            className={`container p-8 bg-white rounded-lg shadow-md md:max-w-[70%]
                                    transition transform duration-200 ease-in border-l-[8px]
                                    ${preview && "md:max-w-[60%]"} 
                                    
                                    ${
                                        id === selectedQuestion.id
                                            ? "border-blue-500"
                                            : "border-transparent"
                                    }
                            `}
                            style={
                                id === 0
                                    ? {
                                          borderTopWidth: "12px",
                                          borderTopColor:
                                              "rgba(109, 40, 217, 1)",
                                          zIndex: 2,
                                      }
                                    : {}
                            }
                        >
                            {id === 0 ? (
                                <FormTitle
                                    id={id}
                                    preview={preview}
                                    title={title}
                                    description={description}
                                />
                            ) : (
                                <TitleNDescription
                                    id={id}
                                    preview={preview}
                                    title={title}
                                    description={description}
                                />
                            )}
                        </li>
                    );
                }
                return (
                    <li
                        key={id}
                        onClick={() => handleAddSelected(id, true)}
                        className={`container p-8 bg-white rounded-lg shadow-md md:max-w-[70%]
                            transition transform duration-200 ease-in border-l-[8px] 
                            ${preview && "md:max-w-[60%]"} 
                            ${
                                id === selectedQuestion.id
                                    ? "border-blue-500"
                                    : "border-transparent"
                            }
                            `}
                    >
                        <AddQuestion
                            docId={docId}
                            preview={preview}
                            id={id}
                            option={option}
                            Icon={optionIcon}
                            description={description}
                            isDescription={isDescription}
                            errorMessage={errorMessage}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default QuestionsList;
