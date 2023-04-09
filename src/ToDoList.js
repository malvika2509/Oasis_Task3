import React from "react";
import "./App.css";

export default function ToDoList(props) {
  return (
    <div className="list">
      {props.itemval}
      <button
        onClick={() => {
          props.onSelect(props.id);
        }}
        className="delete"
      ></button>
    </div>
  );
}
