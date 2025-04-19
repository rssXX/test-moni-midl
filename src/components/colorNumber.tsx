import React from "react";
import {stripWhitespace} from "@/utils";
interface IColorNumberProps {
    value: number | string;
}

const ColorNumber: React.FC<IColorNumberProps> = ({ value }) => {
    const valueFormat = stripWhitespace(value);

    const colorClass = valueFormat === 0
        ? "text-inherit"
        : valueFormat > 0
            ? "text-success"
            : "text-error";

    return (
        <div className={colorClass}>
            {valueFormat > 0 && "+"}
            {value}
        </div>
    );
};

export default ColorNumber;