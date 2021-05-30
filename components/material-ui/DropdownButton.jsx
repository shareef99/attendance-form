import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

export const DropdownButton = withStyles({
    root: {
        textTransform: "none",
        fontSize: 16,
        padding: "6px 12px",
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
        "&:hover": {},
        "&:active": {},
        "&:focus": {},
    },
})(Button);
