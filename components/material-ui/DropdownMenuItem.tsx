import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";

export const DropdownMenuItem = withStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        padding: "10px 0px",
    },
})(MenuItem);
