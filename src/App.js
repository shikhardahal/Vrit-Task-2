import React, { useState } from "react";
import FormBuilder from "./components/FormBuilder";
import FormPreview from "./components/FormPreview";
import FormValidation from "./components/FormValidation";  // Importing the FormValidation component

import "./App.css";

const App = () => {
  // State to hold the form components that are dragged into the form builder
  const [formComponents, setFormComponents] = useState([]);

  return (
    <div className="App">
      <h1>Interactive Form Builder</h1>

      {/* Form Builder: drag-and-drop interface to create custom forms */}
      <div className="builder-section">
        <h2>Form Builder</h2>
        <FormBuilder setFormComponents={setFormComponents} />
      </div>

      {/* Form Preview: shows the live preview of the form based on the builder */}
      <div className="preview-section">
        <h2>Form Preview</h2>
        <FormPreview components={formComponents} />
      </div>

      {/* Form Validation: shows a simple form with validation */}
      <div className="validation-section">
        <h2>Form Validation</h2>
        <FormValidation />
      </div>
    </div>
  );
};

export default App;
