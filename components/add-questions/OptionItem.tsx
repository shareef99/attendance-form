import React from "react";
import { IconType } from "react-icons";

interface Props {
    Icon: IconType;
    option: string;
}

const OptionItem = ({ Icon, option }: Props) => {
    return (
        <div className="rowCenter space-x-4">
            <Icon />
            <p>{option}</p>
        </div>
    );
};

export default OptionItem;
