import React, { Fragment } from "react";
import FormHeader from "../new-form/FormHeader";

interface Props {
    PageName: string;
}

const Header = ({ PageName }: Props) => {
    if (PageName === "NewForm") {
        return <FormHeader />;
    }

    if (PageName === "Preview") {
        return <FormHeader preview />;
    }

    return <Fragment></Fragment>;
};

export default Header;
