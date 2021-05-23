import React, { Fragment, ReactElement } from "react";
import NewFormHeader from "../new-form/NewFormHeader";
import PreviewHeader from "../preview/PreviewHeader";

interface Props {
    PageName: string;
}

const Header = ({ PageName }: Props) => {
    if (PageName === "NewForm") {
        return <NewFormHeader />;
    }

    if (PageName === "Preview") {
        return <PreviewHeader />;
    }

    return <Fragment></Fragment>;
};

export default Header;
