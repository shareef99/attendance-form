// import Link from "next/link";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import QuestionsList from "../../components/add-questions/QuestionsList";
import { useQuestions } from "../../context/questionsContext";

interface Props {}

const NewForm = ({}: Props) => {
    const { questions } = useQuestions();

    console.log("From New", questions);

    return (
        <section>
            {questions ? <QuestionsList questions={questions} /> : ""}
        </section>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {},
    };
};

export default NewForm;
