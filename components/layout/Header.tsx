import React from "react";
import FormHeader from "../new-form/FormHeader";
import classes from "../../styles/components/form/form-header.module.scss";
import Image from "next/image";

interface Props {
    PageName: string;
}

const Header = ({ PageName }: Props) => {
    if (PageName === "new") {
        return <FormHeader />;
    }

    return (
        <header className={`${classes.header} rowCenter h-32`}>
            <Image
                width="48"
                height="48"
                src="/images/forms.png"
                alt="Form Logo by Freepik from flaticon"
            />
            <span className="ml-4 font-medium text-xl">Attendance forms</span>
        </header>
    );
};

export default Header;
