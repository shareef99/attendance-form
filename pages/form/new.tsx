import Link from "next/link";
import QuestionsList from "../../components/add-questions/QuestionsList";
import { useForm } from "../../context/formContext";

interface Props {}

const NewForm = ({}: Props) => {
    // Context
    const { questions } = useForm();

    return (
        <section>
            <h1>New Form</h1>
            <QuestionsList questions={questions} />
            <button>
                <Link href="/">Back to home</Link>
            </button>
        </section>
    );
};

export default NewForm;
