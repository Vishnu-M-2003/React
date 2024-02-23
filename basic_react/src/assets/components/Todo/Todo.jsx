import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todo, setTodo] = useState([{ task: "", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addToTodo = () => {
    setTodo((item) => {
      return [...item, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let addToNewtodo = (event) => {
    setNewTodo(() => {
      return event.target.value;
    });
  };

  let addWhenEnter = (event) => {
    if (event.code == "Enter") {
      addToTodo();
    }
  };

  let deleteTodo = (id) => {
    let copy = todo.filter((todo) => todo.id != id);
    setTodo((item) => {
      return copy;
    });
  };

  let upperCase = () => {
    let copy = todo.map((item) => {
      return {
        ...item,
        task: item.task.toUpperCase(),
      };
    });
    setTodo(copy);
  };

  let upperCaseOne = (id) => {
    setTodo((prevTodo) => {
      prevTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      });
    });
  };

  let done = (id) => {
    let copy = todo.map((todo) => {
      if (todo.id === id) {
        console.log(todo.id);
        return {
          ...todo,
          isDone: true,
        };
      } else {
        return todo;
      }
    });
    setTodo(copy);
  };

  let allDone = () => {
    let copy = todo.map((todo) => {
      return {
        ...todo,
        isDone: true,
      };
    });
    setTodo(copy);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <br></br>
      <br></br>
      <input
        placeholder="Enter the todo"
        onChange={addToNewtodo}
        onKeyDown={addWhenEnter}
        value={newTodo}
      ></input>
      <button onClick={addToTodo}>Add</button>
      <br></br>
      <br></br>
      <ul>
        {todo.map((item) => {
          if (item.task.length) {
            return (
              <li key={item.id}>
                <span
                  style={
                    item.isDone ? { textDecorationLine: "line-through" } : null
                  }
                >
                  {item.task}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={() => deleteTodo(item.id)}>delete</button>
                <button onClick={() => done(item.id)}>Done</button>
              </li>
            );
          }
        })}
      </ul>
      <br></br>
      <br></br>
      <button onClick={allDone}>All Done</button>
    </div>
  );
}
