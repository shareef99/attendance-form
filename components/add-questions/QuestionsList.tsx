import { MouseEvent, useState } from "react";
import { QuestionType } from "../../context/questionsContext";
import AddQuestion from "./AddQuestion";
import TitleNDescription from "./TitleNDescription";

interface Props {
    questions: Array<QuestionType>;
    preview?: boolean;
}

const QuestionsList = ({ questions, preview }: Props) => {
    const [selected, setSelected] = useState<{
        id: number;
        state: boolean;
    }>({ id: -1, state: false });

    const handleRemoveSelected = (
        e: MouseEvent<HTMLUListElement, globalThis.MouseEvent>
    ) => {
        // @ts-ignore, ignoring this warning as I know aria-label exists on this element
        if (e.target.ariaLabel !== "list") return;
        if (preview) return;
        setSelected({ id: -1, state: false });
    };

    const handleAddSelected = (id: number, state: boolean) => {
        if (preview) return;
        setSelected({ id, state });
    };

    return (
        <ul
            className="space-y-8 my-8"
            title="list"
            aria-label="list"
            onClick={handleRemoveSelected}
        >
            {questions.map((question) => {
                const { id, option, optionIcon, title, description } = question;
                if (title || description || title === "") {
                    return (
                        <li
                            onClick={() => handleAddSelected(id, true)}
                            className="container p-8 colCenter items-start space-y-8"
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
                        onClick={() => handleAddSelected(id, true)}
                        className={`container p-8 bg-white rounded-lg shadow-md md:max-w-[60%] 
                            transition transform duration-200 ease-in border-l-4  ${
                                id === selected.id && selected.state
                                    ? "border-blue-500"
                                    : "border-transparent"
                            }`}
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
