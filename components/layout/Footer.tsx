import FormFooter from "../new-form/FormFooter";
interface Props {
    PageName: string;
}

const Footer = ({ PageName }: Props) => {
    if (PageName === "new") {
        return <FormFooter />;
    }

    if (PageName === "preview") {
        return <></>;
    }

    return <></>;
};

export default Footer;
