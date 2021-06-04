import withStyles from "@material-ui/core/styles/withStyles";
import Input from "@material-ui/core/Input";

export const QuestionInput = withStyles({
    root: {
        fontSize: "1.2rem",
        backgroundColor: "#D1D5DB",
        padding: "16px 16px 10px",
        borderRadius: ".25rem",
        borderColor: "#8B5CF6",
    },
})(Input);
