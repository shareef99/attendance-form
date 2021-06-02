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
            <section className="my-12 container colCenter">
                <div>
                    <div className="font-medium pb-4 text-lg ">
                        <span>Start a new form</span>
                    </div>
                    <div>
                        <ul
                            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                                lg:grid-cols-5 gap-4"
                        >
                            <li className="space-y-4">
                                <Link href="/">
                                    <a>
                                        <div className="w-[152px] h-[148px] bg-white rounded shadow"></div>
                                    </a>
                                </Link>
                                <span className="inline-block">
                                    Create a new form
                                </span>
                            </li>
                            <li className="space-y-4">
                                <Link href="/">
                                    <a>
                                        <div className="w-[152px] h-[148px] bg-white rounded shadow"></div>
                                    </a>
                                </Link>
                                <span className="inline-block">
                                    Create a new form
                                </span>
                            </li>
                            <li className="space-y-4">
                                <Link href="/">
                                    <a>
                                        <div className="w-[152px] h-[148px] bg-white rounded shadow"></div>
                                    </a>
                                </Link>
                                <span className="inline-block">
                                    Create a new form
                                </span>
                            </li>
                            <li className="space-y-4">
                                <Link href="/">
                                    <a>
                                        <div className="w-[152px] h-[148px] bg-white rounded shadow"></div>
                                    </a>
                                </Link>
                                <span className="inline-block">
                                    Create a new form
                                </span>
                            </li>
                            <li className="space-y-4">
                                <Link href="/">
                                    <a>
                                        <div className="w-[152px] h-[148px] bg-white rounded shadow"></div>
                                    </a>
                                </Link>
                                <span className="inline-block">
                                    Create a new form
                                </span>
                            </li>
                        </ul>
                    </div>
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
