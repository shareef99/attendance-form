import React, { Fragment } from "react";
import FormHeader from "../new-form/FormHeader";

interface Props {
    PageName: string;
}

const Header = ({ PageName }: Props) => {
    if (PageName === "new") {
        return <FormHeader />;
    }

    if (PageName === "preview") {
        return <FormHeader preview />;
    }

    return <Fragment></Fragment>;
};

export default Header;
