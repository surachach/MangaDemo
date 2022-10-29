import React, { useState } from "react";
import PropTypes from "prop-types";
const Input = ({ addPost }) => {
  const [input, setInput] = useState("");

  return (
    <div className="Input">
      <div className="Input_header">Create Post</div>
      <input
        className="Input_field"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            const title = event.target.value;
            addPost(title);
            setInput("");
          }
        }}
      />
    </div>
  );
};

Input.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default Input;
