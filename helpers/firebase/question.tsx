import { db } from "../../firebase/firebase";
import { questionWithId } from "../question-utils";

export const getQuestions = () => {
    let rawQuestions = [];
    // let questions = [];

    const questionsRef = db.ref().child(`users/shareef/forms/Name Form`);

    questionsRef.on("value", (snap) => {
        const questionsValue = snap.val();
        // Converting Object to Array
        rawQuestions = Object.entries(questionsValue);
        // for (let id in questionsValue) {
        // questions.push(questionsValue[id]);
        // }
    });

    const questions = rawQuestions.map((x) => ({ docId: x[0], ...x[1] }));
    console.log("From Helpers", questions);

    return questions;
};

export const addNewQuestion = () => {
    const questions = getQuestions();
    const questionsRef = db.ref().child(`users/shareef/forms/Name Form`);

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
    // setSelectedQuestion({ id: questions[lastIndex].id + 1, state: true });
};

export const deleteQuestion = (docId: string) => {
    const questions = getQuestions();
    if (questions.length <= 1) return;
    const questionToDeleteRef = db
        .ref()
        .child(`users/shareef/forms/Name Form/${docId}`);
    questionToDeleteRef.remove();
};
