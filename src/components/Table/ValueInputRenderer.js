import React, { useState } from "react";

function ValueInputRenderer(props) {
  const { seriesId, id, value, onChange } = props.value || {};
  const [currentValue, setCurrentValue] = useState(value);

  function handleChangeValue(evt) {
    const { value: newValue } = evt.target || {};
    setCurrentValue(newValue);
    onChange(seriesId, id, parseFloat(newValue, 10));
  }
  return (
    <input
      type="text"
      value={currentValue}
      onChange={handleChangeValue}
      placeholder="Input..."
    />
  );
}

export default ValueInputRenderer;
