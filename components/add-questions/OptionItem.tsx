import React from "react";

// Types import(s)
import { OptionListItem } from "./Options";

interface Props extends OptionListItem {}

const OptionItem = ({ Icon, option }: Props) => {
    return (
        <div className="rowCenter space-x-2">
            <Icon />
            {option}
        </div>
    );
};

export default OptionItem;
