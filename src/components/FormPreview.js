import React from "react";

const FormPreview = ({ components }) => {
  return (
    <div>
      {components.map((component, index) => (
        <div key={index}>
          {component.type === "text" && <input type="text" />}
          {component.type === "select" && <select><option>Sample Option</option></select>}
          {component.type === "radio" && (
            <fieldset>
              <label><input type="radio" /> Option 1</label>
            </fieldset>
          )}
        </div>
      ))}
    </div>
  );
};

export default FormPreview;
