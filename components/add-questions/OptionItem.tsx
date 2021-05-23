import React from "react";
import { IconType } from "react-icons";

interface Props {
    Icon: IconType;
    option: string;
}

const OptionItem = ({ Icon, option }: Props) => {
    if (option && Icon) {
        return (
            <div className="rowCenter space-x-4">
                <Icon />
                <p>{option}</p>
            </div>
        );
    }
    return <></>;
};

export default OptionItem;
