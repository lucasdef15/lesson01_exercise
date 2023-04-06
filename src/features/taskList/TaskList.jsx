import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, onChecked } from "./listSlice";
import { AiFillDelete } from "react-icons/ai";

export default function TaskList() {
  const items = useSelector((state) => state.taskList.items);
  const dispatch = useDispatch();

  const [taskItem, setTaskItem] = useState("");

  const inputRef = useRef(null);

  const addValue = taskItem || "";

  function addTaskItem(event) {
    event.preventDefault();

    setTaskItem("");

    inputRef.current.focus();

    return addTask(addValue);
  }

  return (
    <div className="task_list">
      <form onSubmit={(event) => dispatch(addTaskItem(event))}>
        <input
          type="text"
          ref={inputRef}
          value={taskItem}
          onChange={(e) => setTaskItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items &&
          items.map((item) => {
            return (
              <li
                key={item.id}
                style={{ color: item.checked ? "#888" : "#111" }}
              >
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => dispatch(onChecked(item.id))}
                />
                {item.task}
                <button
                  className="trash"
                  onClick={() => dispatch(deleteTask(item.id))}
                >
                  <AiFillDelete />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
