import * as React from "react";
interface BetopiaFormProps {
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
declare const BetopiaForm: React.FC<BetopiaFormProps>;
export default BetopiaForm;
