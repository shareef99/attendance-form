import { QuestionType } from "../context/questionsContext";

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

    return newQuestions;
};

export const isSelected = (selectedQuestionId: number, questionId: number) => {
    return selectedQuestionId === questionId;
};

export const questionWithId = (questions: Array<QuestionType>, id: number) => {
    return questions?.find((question) => question.id === id);
};
