import Link from "next/link";
import { useQuestions } from "../context/questionsContext";

interface props {}

export default function Home({}: props) {
    // console.log(events);

    const { questions } = useQuestions();

    return (
        <section className="container colCenter">
            <div className="font-medium text-lg" style={{ marginTop: "100px" }}>
                <Link href="/form/new">Start a new form</Link>
            </div>
        </section>
    );
}
