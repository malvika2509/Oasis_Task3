import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./App.css";

export default function App() {
  const [list, setList] = useState("");
  //array
  const [Items, setItems] = useState([]);
  const Add = (event) => {
    setList(event.target.value);
  };

  const List = () => {
    setItems((oldItems) => {
      return [...oldItems, list];
    });
    setList("");
  };
  const del = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main_div">
      <h1>T O D O</h1>
      <div className="center_div">
        <br />
        <div className="butt">
          <button onClick={List} className="add" role="button">
            <span className="text">+</span>
          </button>
          <input
            type="text"
            placeholder="Add a task"
            onChange={Add}
            value={list}
          />
        </div>

        <div className="outer">
          <div className="below_div">
            <ul style={{ listStyleType: "none" }}>
              {Items.map((itemval, index) => {
                return (
                  <ToDoList
                    key={index}
                    id={index}
                    itemval={itemval}
                    onSelect={del}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
