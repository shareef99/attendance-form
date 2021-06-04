import Switch from "@material-ui/core/Switch";
import withStyles from "@material-ui/core/styles/withStyles";

export const RequiredToggle = withStyles({
    switchBase: {
        "&$checked": {
            color: "rgb(103, 58, 183)",
        },
        "&$checked + $track": {
            backgroundColor: "#b9b9b9",
        },
    },
    checked: {},
    track: {},
})(Switch);
