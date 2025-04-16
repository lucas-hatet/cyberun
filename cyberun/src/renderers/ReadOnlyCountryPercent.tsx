import { rankWith, isControl} from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { FC } from "react";


export const readOnlyCountryPercentTester = rankWith(
  10,
  (uischema, schema) => {
    return (
      isControl(uischema) &&
      uischema.scope === '#/properties/item/properties/i01' &&
      schema?.type === 'array'
    );
  }
);

const ReadOnlyCountryPercentRenderer: FC<any> = ({ label, data, description }) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <div style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>{label}</div>
      {description && (
        <div style={{ fontSize: "0.85rem", color: "#666", marginBottom: "0.5rem" }}>
          {description}
        </div>
      )}
      {Array.isArray(data) && data.length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={thStyle}>Country</th>
              <th style={thStyle}>Percent (%)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry: any, index: number) => (
              <tr key={index}>
                <td style={tdStyle}>{entry.country}</td>
                <td style={tdStyle}>{entry.percent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{ fontStyle: "italic", color: "#999" }}>No data provided</div>
      )}
    </div>
  );
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "8px",
  backgroundColor: "#f0f0f0",
  borderBottom: "1px solid #ccc"
};

const tdStyle: React.CSSProperties = {
  padding: "8px",
  borderBottom: "1px solid #eee"
};



export default withJsonFormsControlProps(ReadOnlyCountryPercentRenderer);
