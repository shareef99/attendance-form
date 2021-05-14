import { Icon } from "@material-ui/core";
import React from "react";

// Types import(s)
import { OptionListItem } from "./Options";

interface Props extends OptionListItem {}

const OptionItem = (props: Props) => {
    const { Icon, option } = props;

    return (
        <div className="rowCenter space-x-2">
            <Icon />
            {option}
        </div>
    );
};

export default OptionItem;
