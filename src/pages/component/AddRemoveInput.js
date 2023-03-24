import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const AddRemoveInput = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="input-group">
        <input
          type="text"
          className="form-control fs-4"
          placeholder="How many runs do you have?"
          value={count}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          aria-label="increase"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          <AddIcon fontSize="small" />
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          aria-label="reduce"
          onClick={() => {
            setCount(Math.max(count - 1, 0));
          }}
        >
          <RemoveIcon fontSize="small" />
        </button>
      </div>
    </>
  );
};

export default AddRemoveInput;
