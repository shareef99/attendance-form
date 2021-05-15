import React, { Fragment, ReactElement } from "react";
import NewFormHeader from "../new-form/NewFormHeader";
import PreviewHeader from "../preview/PreviewHeader";

interface Props {
    PageName: string;
}

const Header = ({ PageName }: Props) => {
    if (PageName === "NewForm") {
        return (
            <Fragment>
                <NewFormHeader />
            </Fragment>
        );
    }

    if (PageName === "Preview") {
        return (
            <Fragment>
                <PreviewHeader />
            </Fragment>
        );
    }

    return (
        <Fragment>
            <h1 className="">Header</h1>
        </Fragment>
    );
};

export default Header;
