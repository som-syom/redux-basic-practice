import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
        <TodoForm />
        <input type="date" value={new Date()} />
      </header>
    </div>
  );
}

export default App;
