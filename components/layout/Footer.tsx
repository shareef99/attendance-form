import { Fragment } from "react";
import NewFormFooter from "../new-form/NewFormFooter";
interface Props {
    PageName: string;
}

const Footer = ({ PageName }: Props) => {
    if (PageName === "NewForm") {
        return (
            <Fragment>
                <NewFormFooter />
            </Fragment>
        );
    }
    return (
        <div>
            <h1>Footer</h1>
        </div>
    );
};

export default Footer;
