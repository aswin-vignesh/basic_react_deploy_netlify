import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>

      <input
        ref={inputRef}
        autoFocus
        autoCorrect="false"
        type="text"
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />

      <button
        type="submit"
        aria-label="Add Item" // only hifen here no camel case
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus></FaPlus>
      </button>
    </form>
  );
};

export default AddItem;
