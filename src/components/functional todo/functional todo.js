
import { useState } from "react";

const Funtodos = () => {
  const [todos, setTodos] = useState(["Apple", "kiwi"]);
  const [newFruit, setNewFruit] = useState("banana");

  const addNewFruit = () => {
    setTodos([...todos, newFruit]); // setTodos calling
  };

  const deleteFruit = (index) => {
    const newList = todos.filter((eachTodo, i) => index !== i);
    setTodos(newList);
  };

  const updateFruit = (index) => {
    const random = "watermelon";
    const updatedTodos = todos.map((eachFruit, i) => (index === i ? random : eachFruit));
    setTodos(updatedTodos);
  };

  return (
    <>
      <button onClick={addNewFruit}>Click to add new Fruit</button>
      <ol>
        {todos.map((eachTodo, index) => (
          <li>
            {eachTodo}
            <button onClick={() => deleteFruit(index)}>Delete</button>
            <button onClick={() => updateFruit(index)}>Update</button>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Funtodos;