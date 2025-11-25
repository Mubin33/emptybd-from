import * as React from "react";
type EmptyBDStyles = {
    button?: React.CSSProperties;
    form?: React.CSSProperties;
    label?: React.CSSProperties;
    input?: {
        text?: React.CSSProperties;
        select?: React.CSSProperties;
    };
};
declare global {
    interface Window {
        renderEmptyBDForm: (selector: string, dataKey: string, styles?: EmptyBDStyles) => void;
    }
}
export {};
