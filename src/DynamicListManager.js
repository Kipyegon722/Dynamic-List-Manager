import React, { useState } from "react";

const DynamicListManager = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <h2>Dynamic List Manager</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ul className="list-container">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicListManager;
