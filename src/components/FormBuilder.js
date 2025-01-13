import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const FormBuilder = () => {
  const [components, setComponents] = useState([]);

  const [{ isOver }, drop] = useDrop({
    accept: "formComponent",
    drop: (item) => addComponent(item.type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const addComponent = (type) => {
    const id = new Date().getTime().toString();
    setComponents([...components, { id, type }]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="builder">
        <div className="palette">
          <DraggableComponent type="text">Text Input</DraggableComponent>
          <DraggableComponent type="select">Select</DraggableComponent>
          <DraggableComponent type="radio">Radio Group</DraggableComponent>
        </div>
        <div className="canvas" ref={drop}>
          {isOver && <div className="drop-highlight">Drop here</div>}
          {components.map((component) => (
            <div key={component.id}>{component.type}</div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

const DraggableComponent = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "formComponent",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

export default FormBuilder;
