import React from "react";
import { clsx, type ClassValue } from "clsx";

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    as?: "th" | "td";
    align?: "left" | "center" | "right";
    sticky?: "left" | "right";
    whitespaceNowrap?: 'wrap' | 'nowrap';
    withDivider?: boolean;
}

const TableCell: React.FC<TableCellProps> = ({
    as = "td",
    align,
    sticky,
    withDivider,
    className,
    children,
    ...rest
}) => {
    const Component = as;

    return (
        <Component
            className={clsx(
                "px-2",
                "whitespace-nowrap",
                {
                    "text-left": align === "left",
                    "text-center": align === "center",
                    "text-right": align === "right",
                    "sticky left-0 bg-table pl-4": sticky === "left",
                    "sticky right-0 bg-table": sticky === "right",
                    "border-l border-border": withDivider,
                },
                className
            )}
            {...rest}
        >
            {children}
        </Component>
    );
};

export default TableCell;
