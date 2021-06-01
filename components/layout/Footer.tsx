import { Fragment } from "react";
import FormFooter from "../new-form/FormFooter";
interface Props {
    PageName: string;
}

const Footer = ({ PageName }: Props) => {
    if (PageName === "new") {
        return (
            <Fragment>
                <FormFooter />
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
