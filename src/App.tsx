import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div className="App">
      <div>
        <form onSubmit={(event) => {event.preventDefault(); setTodos([...todos, value]);}}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Adicionar</button>
          
        </form>
        <ul>
          {
            todos.map((todos, i) => (
             <li key={i}>{todos}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default App;
