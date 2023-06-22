import { useState, useEffect } from "react";
import "./App.css";
import dbData from "../db.json";
import Input from "./components/Input";
import Message from "./components/Message";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, selectTodos } from "./store/todosSlice";


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  const addMessage = () => {
    if (todo) {
      dispatch(addTodo(todo));
    }
    setTodo("");
  };

  const deleteMessage = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const [data, setData] = useState<{name: string; age: number; }[]>([]);

  useEffect(() => {
    setData(dbData.data);
  }, []);

  return (
    <>
      <div className="app">
        <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
        <Message deleteMessage={deleteMessage} todos={todos} />

        <p>Db.Json-dan gelen datalar: </p>
        {data.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
