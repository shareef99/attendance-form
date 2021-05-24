import { QuestionType } from "../context/questionsContext";

export const addNewItemAtId = (
    questions: Array<QuestionType>,
    id: number,
    newQuestion: QuestionType
) => {
    const startingQuestions = questions.slice(0, id);
    startingQuestions.push({ ...newQuestion });
    const endingQuestions = questions
        .slice(id)
        .map((x) => ({ ...x, id: ++x.id }));
    const newQuestions = startingQuestions.concat(endingQuestions);

    return newQuestions;
};
