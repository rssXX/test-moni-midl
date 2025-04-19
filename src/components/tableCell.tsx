import React from "react";
import { clsx, type ClassValue } from "clsx";

interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
    as?: "th" | "td";
    align?: "left" | "center" | "right";
    sticky?: "left" | "right";
    whitespaceNowrap?: 'wrap' | 'nowrap';
    withDivider?: boolean;
    dividerColor?: 'border' | 'border-primary';
    fontWeight?: 'medium' | 'semibold';
    width?: number;
}

const TableCell: React.FC<TableCellProps> = ({
    as = "td",
    align,
    sticky,
    withDivider,
    className,
    children,
    dividerColor = 'border',
    fontWeight = 'medium',
    width,
    ...rest
}) => {
    const Component = as;

    return (
        <Component
            className={clsx(
                "px-2 py-3.5",
                "whitespace-nowrap",
                "align-top",
                "relative",
                {
                    "text-left": align === "left",
                    "text-center": align === "center",
                    "text-right": align === "right",
                    "sticky left-0 bg-table pl-4 z-10": sticky === "left",
                    "sticky right-0 bg-table pr-4 pl-8 z-10": sticky === "right",
                    "before:absolute before:left-0 before:top-1/2 before:h-1/2 before:w-px before:-translate-y-1/2": withDivider,
                    "before:bg-border": dividerColor === 'border',
                    "before:bg-border-primary": dividerColor === 'border-primary',
                    "font-medium": fontWeight === 'medium',
                    "font-semibold": fontWeight === 'semibold',
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
