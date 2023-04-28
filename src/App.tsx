import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const deleteTodo = (index : Number) => {
    setTodos(todos => {
      return todos.filter((_, i) => i !== index);
    })
  }

  return (
    <div className="App">
      <div>
        <div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setTodos([...todos, value]);
            }}
          >
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Adicionar</button>
          </form>
        </div>
        <div>
        <ul>
          {todos.map((todos, i) => (
            <div>
              <li key={i}>
                {todos}
                <button
                  onClick={() => {
                    return (
                      <div>
                        <form
                          onSubmit={(event) => {
                            event.preventDefault();
                            setTodos([...todos, value]);
                          }}
                        >
                          <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                          <button type="submit">Salvar</button>
                        </form>
                      </div>
                    );
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    return deleteTodo(i);
                  }}
                >
                  del
                </button>
                <input type="checkbox" />
              </li>
            </div>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
