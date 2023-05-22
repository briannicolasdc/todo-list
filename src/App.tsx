import { useState } from "react";
import "./App.css";

interface TodoItem {
  id: string;
  name: string;
  isChecked: boolean;
}

const App: React.FC = () => {
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const todoCompleted = (item: TodoItem) => {
    todos.push(todos.splice(todos.indexOf(item), 1)[0]);
  };

  function onDeleteItem(item: TodoItem): void {
    setTodos((prev) => prev.filter((listItem) => listItem.id !== item.id));
  }

  function onChangeItemName(item: TodoItem): void {
    throw new Error("Function not implemented.");
  }

  function onCheckItem(item: TodoItem, isChecked: false): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="App">
      <div>
        <div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setTodos([
                ...todos,
                {
                  id: Math.random().toString(),
                  name: newTodoDescription,
                  isChecked: false,
                },
              ]);
            }}
          >
            <input
              type="text"
              value={newTodoDescription}
              onChange={(e) => setNewTodoDescription(e.target.value)}
            />
            <button type="submit">Adicionar</button>
          </form>
        </div>
        <div>
          <ul>
            {todos.map((todo, i) => (
              <TodoItem
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

interface TodoItemProps {
  item: TodoItem;
  onDelete: (item: TodoItem) => void;
  onChangeName: (item: TodoItem) => void;
  onCheck: (item: TodoItem, isChecked: false) => void;
}

function TodoItem({
  item,
  onDelete,
  onChangeName,
  onCheck,
}: TodoItemProps): JSX.Element {
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const editing = (item: TodoItem) => {
    return <div></div>;
  };

  return (
    <div>
      <li>
        {isInEditMode ? (
          <div>
            <form
              action="submit"
              onSubmit={(event) => {event.preventDefault; }}
            ></form>
            <input
              type="text"
              defaultValue={item.name}
              onChange={
                () => {}
            }
            />
            <button type="submit">save</button>
            <button onClick={() => setIsInEditMode(false)}>cancel</button>
          </div>
        ) : (
          <>{isCheck ? <s>{item.name}</s> : <>{item.name}</>}</>
        )}
        <button onClick={() => setIsInEditMode(true)}>edit</button>
        <button onClick={() => onDelete(item)}>del</button>
        <input type="checkbox" onChange={() => setIsCheck(!isCheck)} />
      </li>
    </div>
  );
}
