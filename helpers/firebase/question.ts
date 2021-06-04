import { db } from "../../firebase/firebase";
import { OptionDetailsType } from "../../interface/questions";

export const getQuestionRef = (docId: string) => {
    return db.ref().child(`users/shareef/forms/Name Form/${docId}`);
};

export const getQuestionsRef = () => {
    return db.ref().child(`users/shareef/forms/Name Form`);
};

export const getQuestions = () => {
    let rawQuestions = [];

    const questionsRef = getQuestionsRef();

    questionsRef.on("value", (snap) => {
        const questionsValue = snap.val();
        // Converting Object to Array
        rawQuestions = Object.entries(questionsValue);
    });

    const questions = rawQuestions.map((x) => ({ docId: x[0], ...x[1] }));
    console.log("From Helpers", questions);

    return questions;
};

export const addNewQuestion = () => {
    const questions = getQuestions();
    const questionsRef = getQuestionsRef();

    const lastIndex = questions.length - 1;

    const newQuestion = {
        id: questions[lastIndex].id + 1,
        option: "Short answer",
        // optionIcon: MdShortText,
        question: null,
        optionDetails: [{ id: 1, text: "option 1" }],
        isDescription: false,
        isRequired: false,
    };

    questionsRef.push(newQuestion);

    // TODO
    // Set selected question to the new question as a new question added
    // setSelectedQuestion({ id: questions[lastIndex].id + 1, state: true });
};

export const deleteQuestion = (docId: string) => {
    const questions = getQuestions();
    if (questions.length <= 1) return;
    const questionToDeleteRef = getQuestionRef(docId);
    questionToDeleteRef.remove();
};

export const updateQuestion = (docId: string, questionText: string) => {
    const questionToUpdateRef = getQuestionRef(docId);

    questionToUpdateRef.update({ question: questionText });
};

export const updateQuestionOption = (docId: string, option: string) => {
    const questionToUpdateRef = getQuestionRef(docId);

    questionToUpdateRef.update({ option });
};

export const requiredToggleHandler = (docId: string, isRequired: boolean) => {
    const questionToAddRequiredRef = getQuestionRef(docId);

    questionToAddRequiredRef.update({ isRequired });
};

export const addOption = (
    docId: string,
    optionDetails: Array<OptionDetailsType>
) => {
    const questionToAddOption = getQuestionRef(docId);

    questionToAddOption.update({ optionDetails });
};
