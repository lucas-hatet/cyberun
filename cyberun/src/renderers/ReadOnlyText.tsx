import { rankWith, isStringControl, TesterContext, UISchemaElement, JsonSchema, isControl } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { FC } from "react";

const ReadOnlyTextRenderer: FC<any> = ({ data, label }) => {
    return (
        <div style={{ display: "flex", marginBottom: "1rem" }}>
            <div style={{ width: "40%", fontWeight: "bold" }}>{label}</div>
            <div style={{ width: "60%" }}>{data}</div>
        </div>
    );
};

console.log("Text : ", rankWith(10, isStringControl))
export const readOnlyTextTester = rankWith(10, isStringControl);
export default ReadOnlyTextRenderer;
