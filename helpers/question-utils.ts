import { QuestionType } from "../context/questionsContext";
// React-Icon imports
import { IconType } from "react-icons/lib";
import {
    MdShortText,
    MdArrowDropDownCircle,
    MdDateRange,
    MdAccessTime,
} from "react-icons/md";
import { ImParagraphLeft, ImCheckboxChecked } from "react-icons/im";
import { CgRadioChecked } from "react-icons/cg";
import { OptionType } from "../components/add-questions/Options";

export const options: Array<OptionType> = [
    {
        Icon: MdShortText,
        option: "Short answer",
    },
    {
        Icon: ImParagraphLeft,
        option: "Paragraph",
    },
    {
        Icon: ImCheckboxChecked,
        option: "Multiple choice",
    },
    {
        Icon: CgRadioChecked,
        option: "Checkboxes",
    },
    {
        Icon: MdArrowDropDownCircle,
        option: "Dropdown",
    },
];

export const addNewItemAtId = (
    questions: Array<QuestionType>,
    index: number,
    newQuestion: QuestionType
) => {
    const startingQuestions = questions.slice(0, index);
    startingQuestions.push({ ...newQuestion });
    const endingQuestions = questions
        .slice(index)
        .map((x) => ({ ...x, id: ++x.id }));
    const newQuestions = startingQuestions.concat(endingQuestions);
    const newQuestionId = newQuestions[index + 1].id;
    return { newQuestions, newQuestionId };
};

export const isSelected = (selectedQuestionId: number, questionId: number) => {
    return selectedQuestionId === questionId;
};

export const questionWithId = (questions: Array<QuestionType>, id: number) => {
    return questions?.find((question) => question.id === id);
};

export const getIcon = (option: string) => {
    const Icon = options.find((x) => x.option === option)?.Icon;

    return Icon;
};
