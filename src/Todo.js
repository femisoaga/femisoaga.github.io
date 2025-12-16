import React from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  }
  return (
    <>
      <div>Todo</div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <br></br>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
