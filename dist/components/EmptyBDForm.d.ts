import * as React from "react";
interface EmptyBDFormProps {
    dataKey: string;
    styles?: {
        button?: React.CSSProperties;
        form?: React.CSSProperties;
        label?: React.CSSProperties;
        input?: {
            text?: React.CSSProperties;
            select?: React.CSSProperties;
        };
    };
}
declare const EmptyBDForm: React.FC<EmptyBDFormProps>;
export default EmptyBDForm;
