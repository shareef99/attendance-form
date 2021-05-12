import Link from "next/link";

export default function Home() {
    return (
        <section>
            <h2 className="text-3xl font-[100] text-red-900">
                Hello master shareef
            </h2>
            <button>
                <Link href="/form/new">
                    <a>Create a new form</a>
                </Link>
            </button>
        </section>
    );
}
