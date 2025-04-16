import { rankWith, isEnumControl } from '@jsonforms/core';
import { withJsonFormsControlProps } from "@jsonforms/react";
import { FC } from "react";

interface Props {
  label: string;
  data: string;
  description?: string;
}

const chipStyle: React.CSSProperties = {
  backgroundColor: "#e0f0ff",
  color: "#0366d6",
  padding: "4px 12px",
  borderRadius: "999px",
  display: "inline-block",
  fontSize: "0.9rem",
  fontWeight: 500
};

const ReadOnlyEnumRenderer: FC<any> = ({ label, data, description }) => {
  return (
    <div style={{ display: "flex", marginBottom: "1.5rem" }}>
      <div style={{ width: "40%", fontWeight: "bold" }}>
        {label}
        {description && (
          <div style={{ fontSize: "0.8rem", color: "#666", marginTop: "4px" }}>
            {description}
          </div>
        )}
      </div>
      <div style={{ width: "60%" }}>
        <span style={chipStyle}>{data}</span>
      </div>
    </div>
  );
};


export const readOnlyEnumTester = rankWith(10, isEnumControl);
export default withJsonFormsControlProps(ReadOnlyEnumRenderer);
