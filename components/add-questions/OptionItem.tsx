import React from "react";

// Types import(s)
import { OptionType } from "./Options";

interface Props extends OptionType {}

const OptionItem = ({ Icon, option }: Props) => {
    return (
        <div className="rowCenter space-x-4">
            <Icon />
            {option}
        </div>
    );
};

export default OptionItem;
