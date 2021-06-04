import { Switch, withStyles } from "@material-ui/core";

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
