import Link from "next/link";
import { GetStaticProps } from "next";
import { getTemplates } from "../helpers/firebase";
import { useQuestions } from "../context/questionsContext";

interface props {
    templates: any;
}

export default function Home({ templates }: props) {
    console.log(templates);

    const { questions } = useQuestions();
    console.log(questions);

    return (
        <section>
            <section>
                <div>
                    <span>Start a new form</span>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link href="/form/new">
                                <a>Create a new form</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/form/new">
                                <a>Create a new form</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/form/new">
                                <a>Create a new form</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/form/new">
                                <a>Create a new form</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const templates = await getTemplates();

    return {
        props: {
            templates,
        },
    };
};
