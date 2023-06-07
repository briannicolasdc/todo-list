import { FormEvent, FormEventHandler, useRef, useState } from "react";
import "./App.css";
import { TodoItem } from "./TodoItem";

const App: React.FC = () => {
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  function onDeleteItem(item: TodoItem): void {
    setTodos((prev) => prev.filter((listItem) => listItem.id !== item.id));
  }

  function onChangeItemName(itemId: string, newName: string): void {
    const newTodos = todos.map((todo) => {
      if (todo.id === itemId) {
        return { ...todo, name: newName };
      }

      return todo;
    });

    setTodos(newTodos);
  }

  function onCheckItem(itemId: string): void {
    const newTodos = todos.map((todo) => {
      if (todo.id === itemId) {
        return { ...todo, isChecked: !todo.isChecked };
      }

      return todo;
    });

    setTodos(newTodos);
  }

  const handle = (event: FormEvent) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random().toString(),
        name: newTodoDescription,
        isChecked: false,
      },
    ]);
    setNewTodoDescription("");
  };

  return (
    <div className="App">
      <div>
        <div>
          <form onSubmit={(e) => handle(e)}>
            <input
              type="text"
              value={newTodoDescription}
              onChange={(e) => {
                setNewTodoDescription(e.target.value);
              }}
            />
            <button type="submit">Adicionar</button>
          </form>
        </div>
        <div>
          <ul>
            {todos
              .sort((a, b) => {
                return Number(a.isChecked) - Number(b.isChecked);
              })
              .map((todo, i) => (
                <TodoItem
                  key={todo.id}
                  item={todo}
                  onChangeName={onChangeItemName}
                  onDelete={onDeleteItem}
                  onCheck={onCheckItem}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
