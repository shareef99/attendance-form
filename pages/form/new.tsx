import Link from "next/link";
import React from "react";

interface Props {}

const NewForm = (props: Props) => {
    return (
        <section>
            <h1>New Form</h1>
            <button>
                <Link href="/">Back to home</Link>
            </button>
        </section>
    );
};

export default NewForm;
