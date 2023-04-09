import React from "react";
import "./App.css";

export default function ToDoList(props) {
  // var today = new Date();
  // var date =
  //   today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  // var time =
  //   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // var dateTime = date + " ⏰" + time;
  return (
    <div className="list">
      {props.itemval}

      <button
        onClick={() => {
          props.onSelect(props.id);
        }}
        className="delete"
      ></button>
      {/* <div>
        <span>📆{dateTime}</span>
      </div> */}
    </div>
  );
}
