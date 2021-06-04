import { firestore } from "../firebase/firebase";

export const getTemplates = async () => {
    // const snapshot = await firestore.collection("templates").get();
    // snapshot.docs.forEach((doc) => console.log(doc.data()));

    const templatesRef = await firestore.collection("templates").get();
    const templates: Array<any> = templatesRef.docs.map((doc) => doc.data());

    return templates;
};
