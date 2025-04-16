import {
  isStringControl,
  rankWith
} from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { FC } from "react";

const chipStyle: React.CSSProperties = {
  backgroundColor: "#e0f7e9",
  color: "#2e7d32",
  padding: "4px 10px",
  borderRadius: "999px",
  display: "inline-block",
  fontSize: "0.85rem",
  fontWeight: 500,
  marginRight: "8px",
  marginBottom: "6px"
};

const ReadOnlyMultiEnumRenderer: FC<any> = ({ label, data, description }) => {
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
        {Array.isArray(data) && data.length > 0 ? (
          data.map((value: string, index: number) => (
            <span key={index} style={chipStyle}>
              {value}
            </span>
          ))
        ) : (
          <span style={{ color: "#999" }}>No selection</span>
        )}
      </div>
    </div>
  );
};

export const readOnlyMultiEnumTester = rankWith(10, isStringControl);
export default withJsonFormsControlProps(ReadOnlyMultiEnumRenderer);
