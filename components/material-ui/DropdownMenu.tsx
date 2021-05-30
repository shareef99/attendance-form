import Menu, { MenuProps } from "@material-ui/core/Menu";
import withStyles from "@material-ui/core/styles/withStyles";

export const DropdownMenu = withStyles({
    paper: {
        width: "200px",
    },
})((props: MenuProps) => <Menu {...props} />);
